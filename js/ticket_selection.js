const cardsData = [
  { location: 'SEOUL', logo: 'WATERBOMB', year: '2024', date: '2024.5.7 (FRI-SUN)', dates: ['2024-05-07', '2024-05-08', '2024-05-09'] },
  { location: 'JEJU', logo: 'WATERBOMB', year: '2024', date: '2024.7.20 (SAT)', dates: ['2024-07-20'] },
  { location: 'DAEGU', logo: 'WATERBOMB', year: '2024', date: '2024.6.15 (SAT)', dates: ['2024-06-15'] },
  { location: 'BUSAN', logo: 'WATERBOMB', year: '2024', date: '2024.5.25 (SAT)', dates: ['2024-05-25'] },
  { location: 'INCHEON', logo: 'WATERBOMB', year: '2024', date: '2024.8.3 (SAT)', dates: ['2024-08-03'] },
  { location: 'DAEJEON', logo: 'WATERBOMB', year: '2024', date: '2024.6.29 (SAT)', dates: ['2024-06-29'] },
  { location: 'SOKCHO', logo: 'WATERBOMB', year: '2024', date: '2024.7.6 (SAT)', dates: ['2024-07-06'] },
  { location: 'SUWON', logo: 'WATERBOMB', year: '2024', date: '2024.5.17 (FRI-SUN)', dates: ['2024-05-17', '2024-05-18', '2024-05-19'] },
  { location: 'YEOSU', logo: 'WATERBOMB', year: '2024', date: '2024.8.10 (SAT)', dates: ['2024-08-10'] }
];

const cardsContainer = document.querySelector('#cards-container');
const selectedCardEl = document.querySelector('#selected-card');
const selectedDateEl = document.querySelector('#selected-date');
const selectedQuantityEl = document.querySelector('#selected-quantity');
const datepickerContainer = document.querySelector('#datepicker-container');

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

    // flatpickr 날짜 제한 설정 및 초기 날짜 설정
    flatpickr(datepickerContainer, {
      inline: true,
      dateFormat: "Y-m-d",
      minDate: "today",
      locale: 'ko',
      enable: selectedCard.dates, // 해당 날짜만 선택 가능
      defaultDate: selectedCard.dates[0], // 달력 이동을 위한 초기 날짜 설정
      onChange: function (selectedDates, dateStr) {
        if (selectedCard.dates.includes(dateStr)) {
          selectedDateEl.textContent = dateStr;
        } else {
          alert('다른 날짜를 입력해주세요!');
        }
      }
    });
  });
});

// 초기화
flatpickr(datepickerContainer, {
  inline: true,
  dateFormat: "Y-m-d",
  minDate: "today",
  locale: 'ko'
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
