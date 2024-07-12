const cardsData = [
  { location: 'SEOUL', logo: 'WATERBOMB', year: '2024', date: '2024.5.7 (FRI-SUN)' },
  { location: 'JEJU', logo: 'WATERBOMB', year: '2024', date: '2024.7.20 (SAT)' },
  { location: 'DAEGU', logo: 'WATERBOMB', year: '2024', date: '2024.6.15 (SAT)' },
  { location: 'BUSAN', logo: 'WATERBOMB', year: '2024', date: '2024.5.25 (SAT)' },
  { location: 'INCHEON', logo: 'WATERBOMB', year: '2024', date: '2024.8.3 (SAT)' },
  { location: 'DAEJEON', logo: 'WATERBOMB', year: '2024', date: '2024.6.29 (SAT)' },
  { location: 'SOKCHO', logo: 'WATERBOMB', year: '2024', date: '2024.7.6 (SAT)' },
  { location: 'SUWON', logo: 'WATERBOMB', year: '2024', date: '2024.5.17 (FRI-SUN)' },
  { location: 'YEOSU', logo: 'WATERBOMB', year: '2024', date: '2024.8.10 (SAT)' }
];

const cardsContainer = document.querySelector('#cards-container');
const selectedCardEl = document.querySelector('#selected-card');
const selectedDateEl = document.querySelector('#selected-date');
const selectedQuantityEl = document.querySelector('#selected-quantity');

let cardsHTML = '';
cardsData.forEach((card, index) => {
  cardsHTML += `
      <div class="card" data-index="${index}">
          <div><h3>${card.logo}</h3></div>
          <p>${card.year}</p>
          <h2>${card.location}</h2>
          <p>${card.date}</p>
      </div>
  `;
});

cardsContainer.innerHTML = cardsHTML;

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected')); // 이전 선택 해제
    card.classList.add('selected'); // 현재 카드 선택
    const index = card.getAttribute('data-index');
    const selectedCard = cardsData[index];
    selectedCardEl.textContent = `${selectedCard.location} - ${selectedCard.date}`;
  });
});

// datepicker script.js 파일
flatpickr("#datepicker-container", {
  inline: true, // 달력을 항상 표시
  dateFormat: "Y-m-d",
  minDate: "today",
  locale: 'ko',
  onChange: function (selectedDates, dateStr) {
    selectedDateEl.textContent = dateStr;
  }
});

// 수량 및 가격 업데이트 기능 추가
const minusBtn = document.querySelector('.fa-square-minus');
const plusBtn = document.querySelector('.fa-square-plus');
const totalQuantity = document.querySelector('.totalQuantity');
const totalPrice = document.querySelector('.totalPrice span');
const unitPrice = 110000; // 단위 가격 설정

function updatePrice() {
  const quantity = parseInt(totalQuantity.textContent, 10);
  const price = quantity * unitPrice;
  totalPrice.textContent = `${price.toLocaleString()} 원`;
  selectedQuantityEl.textContent = quantity;
}

minusBtn.addEventListener('click', () => {
  let quantity = parseInt(totalQuantity.textContent, 10);
  if (quantity > 0) { // 최소 수량은 0으로 설정
    quantity -= 1;
    totalQuantity.textContent = quantity;
    updatePrice();
  }
});

plusBtn.addEventListener('click', () => {
  let quantity = parseInt(totalQuantity.textContent, 10);
  quantity += 1;
  totalQuantity.textContent = quantity;
  updatePrice();
});

// 페이지 로드 시 초기 수량 및 가격 설정
totalQuantity.textContent = '0';
updatePrice();
