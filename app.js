const data = [
  {
    name: '김치찌개',
    type: 'korean',
    weather: ['cold', 'rainy', 'snow'],
    mood: ['stressed', 'tired'],
    budget: 'under_10k',
    price: 9000,
    desc: '매콤하고 따뜻한 국물이 생각날 때',
    reason: '따뜻한 국물과 매운맛이 추운 날과 스트레스 해소에 도움됩니다.',
    image: './images/kimchi-jjigae.jpg'
  },
  {
    name: '불고기 덮밥',
    type: 'korean',
    weather: ['clear', 'cool'],
    mood: ['happy', 'relaxed'],
    budget: '10k_30k',
    price: 11000,
    desc: '달콤한 불고기를 밥과 함께',
    reason: '포만감 있는 한 끼로 기분을 끌어올립니다.',
    image: './images/bulgogi-bowl.jpg'
  },
  {
    name: '치즈 피자',
    type: 'western',
    weather: ['clear', 'hot'],
    mood: ['happy'],
    budget: '10k_30k',
    price: 22000,
    desc: '치즈가 듬뿍 올라간 피자',
    reason: '여럿이 나눠 먹기 좋아 기분 전환에 효과적입니다.',
    image: './images/cheese-pizza.jpg'
  },
  {
    name: '냉면',
    type: 'korean',
    weather: ['hot', 'clear'],
    mood: ['tired', 'relaxed'],
    budget: '10k_30k',
    price: 11000,
    desc: '더운 날 시원하게 즐기는 면요리',
    reason: '더위를 식히며 가볍게 먹기 좋습니다.',
    image: './images/naengmyeon.jpg'
  },
  {
    name: '마파두부',
    type: 'chinese',
    weather: ['cloudy', 'cold', 'rainy'],
    mood: ['happy', 'stressed'],
    budget: '10k_30k',
    price: 12000,
    desc: '향긋하고 매콤한 중식 반찬',
    reason: '강한 풍미가 입맛을 돋우어 줍니다.',
    image: './images/mapo-tofu.jpg'
  },
  {
    name: '크렘브륄레',
    type: 'western',
    weather: ['clear', 'cool'],
    mood: ['happy'],
    budget: 'under_10k',
    price: 8500,
    desc: '바삭한 설탕층과 부드러운 크림',
    reason: '작은 사치로 기분을 특별하게 만들어줍니다.',
    image: './images/creme-brulee.jpg'
  },
  {
    name: '비빔밥',
    type: 'korean',
    weather: ['clear', 'cloudy', 'rainy'],
    mood: ['happy', 'relaxed'],
    budget: '10k_30k',
    price: 12000,
    desc: '다양한 채소와 고추장으로 비빈 건강식',
    reason: '균형 잡힌 맛으로 기분 안정에 좋아요.',
    image: './images/bibimbap.jpg'
  },
  {
    name: '샐러드',
    type: 'western',
    weather: ['hot', 'clear', 'cool'],
    mood: ['tired', 'relaxed'],
    budget: 'under_10k',
    price: 9500,
    desc: '신선한 채소 위주의 가벼운 한 끼',
    reason: '피곤할 때 부담 없이 먹기 좋습니다.',
    image: './images/salad.jpg'
  },
  {
    name: '짬뽕',
    type: 'chinese',
    weather: ['cold', 'rainy'],
    mood: ['tired', 'stressed'],
    budget: '10k_30k',
    price: 11000,
    desc: '해산물과 매콤한 국물의 중화요리',
    reason: '진한 국물이 기운을 돋아줍니다.',
    image: './images/jjamppong.jpg'
  },
  {
    name: '초밥 세트',
    type: 'japanese',
    weather: ['clear', 'cool'],
    mood: ['happy', 'relaxed'],
    budget: '10k_30k',
    price: 25000,
    desc: '신선한 초밥을 다양하게 즐기는 세트',
    reason: '특별한 날 가볍게 즐기기 좋습니다.',
    image: './images/sushi-set.jpg'
  },
  {
    name: '된장찌개 정식',
    type: 'korean',
    weather: ['cool', 'cloudy'],
    mood: ['relaxed', 'tired'],
    budget: '10k_30k',
    price: 11000,
    desc: '구수한 된장국과 반찬이 있는 한 끼',
    reason: '편안한 기분에 잘 어울리는 안정적인 식사입니다.',
    image: './images/doenjang-jjigae.jpg'
  },
  {
    name: '떡볶이 세트',
    type: 'snack_asian',
    weather: ['clear', 'cloudy'],
    mood: ['happy', 'stressed'],
    budget: 'under_10k',
    price: 9000,
    desc: '매콤달콤한 분식 대표 메뉴',
    reason: '친구들과 나눠 먹기 좋아 기분 전환에 효과적입니다.',
    image: './images/tteokbokki.jpg'
  },
  {
    name: '우동',
    type: 'japanese',
    weather: ['rainy', 'cool'],
    mood: ['relaxed', 'tired'],
    budget: 'under_10k',
    price: 9000,
    desc: '따뜻한 국물과 쫄깃한 면',
    reason: '비오는 날 따뜻하게 즐기기 좋습니다.',
    image: './images/udon.jpg'
  },
  {
    name: '스테이크 세트',
    type: 'western',
    weather: ['clear', 'cool'],
    mood: ['happy'],
    budget: 'over_30k',
    price: 42000,
    desc: '풍성한 고기와 사이드가 있는 식사',
    reason: '기분을 특별하게 만들어주는 메뉴입니다.',
    image: './images/steak-set.jpg'
  },
  {
    name: '라멘',
    type: 'japanese',
    weather: ['cold', 'rainy'],
    mood: ['tired', 'stressed'],
    budget: '10k_30k',
    price: 11000,
    desc: '진한 국물의 일본식 면요리',
    reason: '진한 국물이 피로 회복에 도움됩니다.',
    image: './images/ramen.jpg'
  },
  {
    name: '닭갈비',
    type: 'korean',
    weather: ['clear', 'cold'],
    mood: ['happy', 'stressed'],
    budget: '10k_30k',
    price: 13000,
    desc: '매콤달콤 철판 요리',
    reason: '움직이며 나눠먹기 좋아 활력을 줍니다.',
    image: './images/dak-galbi.jpg'
  },
  {
    name: '탕수육',
    type: 'chinese',
    weather: ['clear', 'cloudy'],
    mood: ['happy', 'relaxed'],
    budget: '10k_30k',
    price: 20000,
    desc: '바삭한 튀김과 새콤달콤 소스',
    reason: '다같이 즐기기 좋은 만족도 높은 메뉴입니다.',
    image: './images/tangsuyuk.jpg'
  },
  {
    name: '카레라이스',
    type: 'western',
    weather: ['cloudy', 'cold'],
    mood: ['tired', 'relaxed'],
    budget: 'under_10k',
    price: 8500,
    desc: '담백하고 든든한 카레',
    reason: '간단하지만 포만감을 줍니다.',
    image: './images/curry-rice.jpg'
  },
  {
    name: '햄버거 세트',
    type: 'western',
    weather: ['clear', 'hot'],
    mood: ['happy', 'tired'],
    budget: '10k_30k',
    price: 10500,
    desc: '손쉽게 먹는 든든한 한 끼',
    reason: '간편하게 기분 전환하기 좋습니다.',
    image: './images/burger-set.jpg'
  },
  {
    name: '김밥',
    type: 'snack_asian',
    weather: ['clear', 'hot', 'cloudy', 'cool', 'rainy', 'snow', 'cold'],
    mood: ['relaxed', 'tired'],
    budget: 'under_10k',
    price: 5500,
    desc: '간단하게 먹는 김밥',
    reason: '간단한 외출이나 피크닉에 적합합니다.',
    image: './images/kimbap.jpg'
  },
  {
    name: '부대찌개',
    type: 'korean',
    weather: ['cold', 'rainy'],
    mood: ['stressed', 'happy'],
    budget: '10k_30k',
    price: 11000,
    desc: '풍성한 재료의 얼큰한 찌개',
    reason: '여럿이 나눠먹기 좋아 기분을 북돋아줍니다.',
    image: './images/budae-jjigae.jpg'
  },
  {
    name: '가츠동',
    type: 'japanese',
    weather: ['clear', 'cool'],
    mood: ['happy', 'tired'],
    budget: '10k_30k',
    price: 11000,
    desc: '바삭한 돈가스와 소스가 어우러진 덮밥',
    reason: '간편하지만 만족스러운 한 끼입니다.',
    image: './images/katsudon.jpg'
  },
  {
    name: '팔보채',
    type: 'chinese',
    weather: ['clear', 'cloudy'],
    mood: ['happy', 'relaxed'],
    budget: 'over_30k',
    price: 36000,
    desc: '해산물과 채소를 고급스럽게 볶아낸 중식',
    reason: '특별한 날 나누기 좋은 메뉴입니다.',
    image: './images/palbochae.jpg'
  },
  {
    name: '토마토 파스타',
    type: 'western',
    weather: ['clear', 'cool'],
    mood: ['relaxed', 'happy'],
    budget: '10k_30k',
    price: 13000,
    desc: '상큼한 토마토 소스의 파스타',
    reason: '가벼운 외식으로 적합합니다.',
    image: './images/tomato-pasta.jpg'
  },
  {
    name: '호박죽',
    type: 'korean',
    weather: ['cold', 'snow'],
    mood: ['tired', 'relaxed'],
    budget: 'under_10k',
    price: 9000,
    desc: '부드럽고 달콤한 죽',
    reason: '속을 달래고 편안하게 쉬고 싶을 때 좋아요.',
    image: './images/hobakjuk.jpg'
  },
  {
    name: '떡국',
    type: 'korean',
    weather: ['cold', 'snow'],
    mood: ['relaxed', 'happy'],
    budget: 'under_10k',
    price: 10000,
    desc: '따뜻한 떡국',
    reason: '추운 날 따뜻하게 즐길 수 있는 전통 음식입니다.',
    image: './images/tteokguk.jpg'
  }
];

const form = document.getElementById('prefs-form');
const homeView = document.getElementById('home-view');
const resultView = document.getElementById('result-view');
const resultCard = document.getElementById('result-card');
const resultMessage = document.getElementById('result-message');
const rerollBtn = document.getElementById('reroll-btn');
const homeBtn = document.getElementById('home-btn');
let lastRecommendedIndex = null;
let seenRecommendationsByKey = {};
let currentPreferenceKey = '';

const typeLabels = {
  korean: '한식',
  chinese: '중식',
  japanese: '일식',
  western: '양식',
  snack_asian: '분식/아시안'
};

const budgetLabels = {
  under_10k: '1만원 이하',
  '10k_30k': '1만원 초과 3만원 이하',
  over_30k: '3만원 초과'
};

const weatherLabels = {
  clear: '맑은 날',
  hot: '더운 날',
  cloudy: '흐린 날',
  cool: '선선한 날',
  rainy: '비 오는 날',
  snow: '눈 오는 날',
  cold: '추운 날'
};

const moodLabels = {
  stressed: '스트레스',
  relaxed: '편안',
  happy: '행복',
  tired: '피곤함'
};

function getPreferences() {
  return {
    weather: form.weather.value,
    mood: form.mood.value,
    type: form.type.value,
    budget: form.budget.value
  };
}

function showHome() {
  resultView.classList.add('hidden');
  homeView.classList.remove('hidden');
  resultMessage.classList.add('hidden');
  resultCard.innerHTML = '';
}

function showResult() {
  homeView.classList.add('hidden');
  resultView.classList.remove('hidden');
}

function scoreItem(item, prefs) {
  let score = 0;
  if (item.weather.includes(prefs.weather)) {
    score += 2;
  }
  if (item.mood.includes(prefs.mood)) {
    score += 1;
  }
  return score;
}

function recommendItem(prefs, excludeIndex = null) {
  const budgetMatches = data.filter(item => item.budget === prefs.budget);
  if (budgetMatches.length === 0) {
    return { noBudgetMatch: true };
  }

  let candidates = budgetMatches;
  if (prefs.type !== 'any') {
    const typeMatches = budgetMatches.filter(item => item.type === prefs.type);
    if (typeMatches.length > 0) {
      candidates = typeMatches;
    }
  }

  let scoredCandidates = candidates.map(item => ({
    item,
    originalIndex: data.indexOf(item),
    score: scoreItem(item, prefs)
  }));

  if (excludeIndex !== null) {
    scoredCandidates = scoredCandidates.filter(entry => entry.originalIndex !== excludeIndex);
    if (scoredCandidates.length === 0) {
      return { noAlternative: true };
    }
  }

  const topScore = Math.max(...scoredCandidates.map(entry => entry.score));
  const bestCandidates = scoredCandidates.filter(entry => entry.score === topScore);
  const chosen = bestCandidates[Math.floor(Math.random() * bestCandidates.length)];
  lastRecommendedIndex = chosen.originalIndex;

  return {
    item: chosen.item,
    originalIndex: chosen.originalIndex,
    score: chosen.score,
    prefs,
    noBudgetMatch: false
  };
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function renderResult(result) {
  resultCard.innerHTML = '';

  if (result.noBudgetMatch) {
    resultMessage.textContent = '선택한 예산에 맞는 메뉴가 없습니다.';
    resultMessage.classList.remove('hidden');
    resultCard.classList.add('hidden');
    showResult();
    return;
  }

  resultMessage.classList.add('hidden');
  resultCard.classList.remove('hidden');

  const item = result.item;
  const cardTitle = createElement('h2', 'result-card-heading', item.name);
  const imageWrapper = createElement('div', 'result-image-wrapper');
  const image = createElement('img', 'menu-img');
  image.src = item.image;
  image.alt = item.name;
  image.loading = 'lazy';
  image.decoding = 'async';

  const fallback = createElement('div', 'image-fallback');
  const fallbackTitle = createElement('p', 'fallback-title', '이미지를 준비 중입니다');
  const fallbackName = createElement('p', 'fallback-name', item.name);
  fallback.append(fallbackTitle, fallbackName);

  image.addEventListener('error', () => {
    image.style.display = 'none';
    fallback.style.display = 'flex';
  });

  imageWrapper.append(image, fallback);

  const typeLine = createElement('p', 'result-item-type', `음식 종류: ${typeLabels[item.type] || '기타'}`);
  const priceLine = createElement('p', 'result-item-price', `예상 가격: 약 ${item.price.toLocaleString('ko-KR')}원`);
  const descriptionLine = createElement('p', 'result-item-desc', item.desc);
  const reasonLine = createElement('p', 'result-item-reason', `추천 이유: ${item.reason}`);

  const tagList = createElement('div', 'tag-list');
  const budgetTag = createElement('span', 'tag-item', `#${budgetLabels[item.budget]}`);
  tagList.append(budgetTag);

  if (result.prefs.type !== 'any' && item.type === result.prefs.type) {
    tagList.append(createElement('span', 'tag-item', `#${typeLabels[item.type]}`));
  }
  if (item.weather.includes(result.prefs.weather)) {
    tagList.append(createElement('span', 'tag-item', `#${weatherLabels[result.prefs.weather]}`));
  }
  if (item.mood.includes(result.prefs.mood)) {
    tagList.append(createElement('span', 'tag-item', `#${moodLabels[result.prefs.mood]}`));
  }

  resultCard.append(imageWrapper, cardTitle, typeLine, priceLine, descriptionLine, reasonLine, tagList);
  showResult();
}

function handleFormSubmit(event) {
  event.preventDefault();
  const prefs = getPreferences();
  const result = recommendItem(prefs);
  renderResult(result);
}

function handleReroll() {
  const prefs = getPreferences();
  const result = recommendItem(prefs, lastRecommendedIndex);

  if (result.noAlternative) {
    alert('추천할 수 있는 다른 메뉴가 없습니다. 메인 화면으로 돌아갑니다.');
    showHome();
    return;
  }

  renderResult(result);
}

form.addEventListener('submit', handleFormSubmit);
rerollBtn.addEventListener('click', handleReroll);
homeBtn.addEventListener('click', showHome);
