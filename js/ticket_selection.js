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

const cardsContainer = document.querySelector('#cards-container');
const selectedCardEl = document.querySelector('#selected-card');
const selectedDateEl = document.querySelector('#selected-date');
const selectedQuantityEl = document.querySelector('#selected-quantity');
cardsContainer.innerHTML = cardsHTML;

document.addEventListener('DOMContentLoaded', function () {
  const calendarElement = document.getElementById('calendar');
  const today = new Date();
  let selectedDate = today;

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  function renderCalendar(year, month, enabledDates = [], defaultDate) {
    calendarElement.innerHTML = '';

    const calendarHeader = document.createElement('div');
    calendarHeader.className = 'calendar-header';

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&lt;';
    prevButton.addEventListener('click', () => {
      const prevMonth = new Date(year, month - 1, 1);
      renderCalendar(prevMonth.getFullYear(), prevMonth.getMonth(), enabledDates, defaultDate);
    });

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&gt;';
    nextButton.addEventListener('click', () => {
      const nextMonth = new Date(year, month + 1, 1);
      renderCalendar(nextMonth.getFullYear(), nextMonth.getMonth(), enabledDates, defaultDate);
    });

    const monthYearDisplay = document.createElement('h2');
    monthYearDisplay.textContent = `${year}년 ${month + 1}월`;

    calendarHeader.appendChild(prevButton);
    calendarHeader.appendChild(monthYearDisplay);
    calendarHeader.appendChild(nextButton);

    const calendarGrid = document.createElement('div');
    calendarGrid.className = 'calendar-grid';

    // 요일 표시
    weekDays.forEach(day => {
      const weekDayCell = document.createElement('div');
      weekDayCell.className = 'calendar-weekday';
      weekDayCell.textContent = day;
      calendarGrid.appendChild(weekDayCell);
    });

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement('div');
      calendarGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayCell = document.createElement('div');
      dayCell.className = 'calendar-day';
      dayCell.textContent = day;

      // 오늘 날짜 표시
      const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      if (dateStr === todayStr) {
        dayCell.classList.add('today');
      }


      if (enabledDates.includes(dateStr)) {
        dayCell.addEventListener('click', () => {
          selectedDate = new Date(year, month, day);
          selectedDateEl.textContent = dateStr;
          renderCalendar(year, month, enabledDates, dateStr);
        });
      } else {
        dayCell.style.color = 'lightgray';
      }
      if (dateStr === defaultDate) {
        dayCell.classList.add('selected');
      }
      calendarGrid.appendChild(dayCell);
    }

    calendarElement.appendChild(calendarHeader);
    calendarElement.appendChild(calendarGrid);
  }

  function resetSelectionInfo() {
    selectedCardEl.textContent = "없음";
    selectedDateEl.textContent = "없음";
    selectedQuantityEl.textContent = "0";
    totalQuantity.textContent = '0'; // 수량 초기화
    totalPrice.textContent = '0 원'; // 총 결제 금액 초기화
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const index = card.getAttribute('data-index');
      const selectedCard = cardsData[index];
      resetSelectionInfo();
      selectedCardEl.textContent = `${selectedCard.location} - ${selectedCard.date}`;
      const defaultDate = selectedCard.dates[0];
      const defaultDateObj = new Date(defaultDate);
      renderCalendar(defaultDateObj.getFullYear(), defaultDateObj.getMonth(), selectedCard.dates, defaultDate);
      selectedDateEl.textContent = defaultDate;
    });
  });

  renderCalendar(today.getFullYear(), today.getMonth());
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
  selectedQuantityEl.textContent = quantity; // 선택한 수량을 업데이트
}

minusBtn.addEventListener('click', () => {
  let quantity = parseInt(totalQuantity.textContent, 10);
  if (quantity > 0) {
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
