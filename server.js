const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { Pool } = require('pg');

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html':
      return 'text/html; charset=utf-8';
    case '.js':
      return 'application/javascript; charset=utf-8';
    case '.css':
      return 'text/css; charset=utf-8';
    case '.json':
      return 'application/json; charset=utf-8';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.svg':
      return 'image/svg+xml';
    case '.webp':
      return 'image/webp';
    default:
      return 'application/octet-stream';
  }
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error('잘못된 JSON 본문입니다.'));
      }
    });
    req.on('error', reject);
  });
}

async function initializeDatabase(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS recommendations (
      id SERIAL PRIMARY KEY,
      menu_name VARCHAR(200) NOT NULL,
      menu_desc TEXT NOT NULL,
      menu_reason TEXT NOT NULL,
      menu_image TEXT,
      weather VARCHAR(50),
      mood VARCHAR(50),
      type VARCHAR(50),
      budget VARCHAR(50),
      note TEXT,
      nickname VARCHAR(100) NOT NULL,
      password_hash TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await pool.query(`
    ALTER TABLE recommendations
    ADD COLUMN IF NOT EXISTS password_hash TEXT;
  `);

  await pool.query(`
    UPDATE recommendations
    SET password_hash = COALESCE(password_hash, '')
    WHERE password_hash IS NULL;
  `);
}

function getPoolConfig(options = {}) {
  const connectionString = options.connectionString || process.env.DATABASE_URL;
  const useSsl = Boolean(options.ssl ?? (process.env.DATABASE_URL && process.env.DATABASE_URL.includes('render.com')));

  if (connectionString) {
    return {
      connectionString,
      ssl: useSsl ? { rejectUnauthorized: false } : false
    };
  }

  return {
    host: process.env.PGHOST || '127.0.0.1',
    port: Number(process.env.PGPORT || 5432),
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'postgres',
    database: process.env.PGDATABASE || 'menu_recommendation',
    ssl: useSsl ? { rejectUnauthorized: false } : false
  };
}

function createServer(options = {}) {
  const pool = new Pool(getPoolConfig(options));
  const server = http.createServer(async (req, res) => {
    const { pathname } = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    if (req.method === 'GET' && pathname === '/api/recommendations') {
      try {
        const limit = Number(new URL(req.url, `http://${req.headers.host || 'localhost'}`).searchParams.get('limit')) || 8;
        const result = await pool.query(`
          SELECT id, menu_name AS "menuName", menu_desc AS "menuDesc", menu_reason AS "menuReason",
                 menu_image AS "menuImage", weather, mood, type, budget, note, nickname, password_hash AS "passwordHash", created_at AS "createdAt"
          FROM recommendations
          ORDER BY id DESC
          LIMIT $1
        `, [limit]);

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(result.rows));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: '추천 목록을 불러오지 못했습니다.' }));
      }
      return;
    }

    if (req.method === 'POST' && pathname === '/api/recommendations') {
      try {
        const payload = await parseJsonBody(req);
        const nickname = String(payload.nickname || '익명').trim();
        const menuName = String(payload.menuName || '').trim();
        const menuDesc = String(payload.menuDesc || '').trim();
        const menuReason = String(payload.menuReason || '').trim();

        if (!menuName || !menuDesc || !menuReason) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: '메뉴 이름, 설명, 추천 이유는 필수입니다.' }));
          return;
        }

        const note = String(payload.note || '').trim();
        const password = String(payload.password || '').trim();

        if (!password) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: '비밀번호는 필수입니다.' }));
          return;
        }

        const passwordHash = require('node:crypto').createHash('sha256').update(password).digest('hex');
        const result = await pool.query(`
          INSERT INTO recommendations (
            menu_name, menu_desc, menu_reason, menu_image, weather, mood, type, budget, note, nickname, password_hash
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          RETURNING id, menu_name AS "menuName", menu_desc AS "menuDesc", menu_reason AS "menuReason",
                    menu_image AS "menuImage", weather, mood, type, budget, note, nickname, password_hash AS "passwordHash", created_at AS "createdAt"
        `, [
          menuName,
          menuDesc,
          menuReason,
          payload.menuImage || '',
          payload.weather || '',
          payload.mood || '',
          payload.type || '',
          payload.budget || '',
          note,
          nickname,
          passwordHash
        ]);

        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(result.rows[0]));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: error.message || '공유 요청을 처리하지 못했습니다.' }));
      }
      return;
    }

    if (req.method === 'DELETE' && pathname.startsWith('/api/recommendations/')) {
      try {
        const id = Number(pathname.split('/').pop());
        const payload = await parseJsonBody(req);
        const password = String(payload.password || '').trim();

        if (!id || !password) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: '삭제하려면 ID와 비밀번호가 필요합니다.' }));
          return;
        }

        const passwordHash = require('node:crypto').createHash('sha256').update(password).digest('hex');
        const result = await pool.query(`
          DELETE FROM recommendations
          WHERE id = $1 AND password_hash = $2
        `, [id, passwordHash]);

        if (result.rowCount === 0) {
          res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: '비밀번호가 맞지 않거나 이미 삭제된 글입니다.' }));
          return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: error.message || '삭제 요청을 처리하지 못했습니다.' }));
      }
      return;
    }

    const requestPath = pathname === '/' ? '/index.html' : pathname;
    const safePath = requestPath.replace(/^\/+/, '');
    const filePath = path.join(__dirname, safePath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    const fallbackPath = path.join(__dirname, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(fallbackPath).pipe(res);
  });

  server._pool = pool;

  server.on('close', () => {
    pool.end().catch(() => {});
  });

  return server;
}

async function startServer(options = {}) {
  const requestedPort = Number(options.port || process.env.PORT || 3000);
  const server = createServer(options);
  const pool = server._pool;

  if (!pool) {
    throw new Error('PostgreSQL pool could not be initialized.');
  }

  await initializeDatabase(pool);

  const listenOnPort = (port) => {
    server.removeAllListeners('error');
    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE' && port < requestedPort + 10) {
        const fallbackPort = port + 1;
        console.warn(`포트 ${port}가 사용 중이라 ${fallbackPort}로 다시 시도합니다.`);
        listenOnPort(fallbackPort);
        return;
      }

      throw error;
    });

    server.listen(port, () => {
      const address = server.address();
      const actualPort = typeof address === 'object' && address ? address.port : port;
      console.log(`추천 공유 서버가 http://localhost:${actualPort} 에서 실행 중입니다.`);
    });
  };

  listenOnPort(requestedPort);

  return server;
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error('PostgreSQL 연결 초기화에 실패했습니다.', error);
    process.exit(1);
  });
}

module.exports = {
  createServer,
  startServer
};
