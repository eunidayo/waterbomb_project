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
// 배열안에는 값만 넣을 수 있고 객체 안에는 키와 값을 넣을 수 있는데 제이슨형식으로 배열안에 값으로 객체들을 집어넣었음, 각 객체는 지역 ,년도, 요일, 날짜를 포함함
let cardsHTML = '';
// cardsHTML 이라는 변수를 공백으로 두고 그 공백 안에
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
// cardsData 를 반복문을 돌림, 각 카드는 card라는 이름으로 불르고.배열의 몇 번째 카드인지를 index라는 이름으로 불름 cardsData는 총0~8번까지 9개의 인덱스가 저장되어있으니까 9장의 index가 나올것이고 각각의 카드는 cardHTML안에서 각 카드의 인덱스를 가져와서, 각 카드 <div>에 data-index 속성으로 index를 저장하고/ card의 logo,year,location,date를 가져와서 cardHTML에 추가해줌.


const cardsContainer = document.querySelector('#cards-container');
const selectedCardEl = document.querySelector('#selected-card');
const selectedDateEl = document.querySelector('#selected-date');
const selectedQuantityEl = document.querySelector('#selected-quantity');
const datepickerContainer = document.querySelector('#datepicker-container');
// 각각의 변수에 각각의 id를 찾아서 저장함.
cardsContainer.innerHTML = cardsHTML;
// cardsContainer 요소의 내부 HTML을 cardsHTML 변수에 저장된 내용으로 설정함, 즉 카드들을 작성해줌 >> 반복문 돌린놈들을 html에 다가 작성해준다는 뜻.

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    // 클래스이름이 card인 모든 요소들을 찾아서 함수를 반복해서 실행할것임, card를 클릭하면 모든 카드들의 클래스에 selected를 제거함.  즉 이전에 선택되어있던것들을 초기화함.
    card.classList.add('selected'); // 현재 클릭한 카드는 선택 클래스에 selected를 추가함
    const index = card.getAttribute('data-index');
    // 현재 클릭된 카드의 data-index 속성 값을 즉 위의 <div class="card" data-index="${index}">를 가져옴 그리고서 index라는 변수에 할당
    const selectedCard = cardsData[index];
    //cardsData 배열에서 해당 인덱스에 있는 카드를 가져와 selectedCard 변수에 저장
    selectedCardEl.textContent = `${selectedCard.location} - ${selectedCard.date}`;
    //선택된 카드의 위치와 날짜를 selectedCardEl 요소에 텍스트로 설정



    // flatpickr 날짜 제한 설정 및 초기 날짜 설정
    flatpickr(datepickerContainer, {
      inline: true,
      // 달력이 항상 보이도록 설정
      dateFormat: "Y-m-d",
      // 날짜 형식을 년-월-일로 설정
      minDate: "today",
      // 오늘 이후의 날짜만 선택할 수 있도록 설정
      locale: 'ko',
      // 달력의 언어를 한국어로 설정
      enable: selectedCard.dates,
      // 해당 날짜만 선택 가능
      defaultDate: selectedCard.dates[0],
      // 달력 이동을 위한 초기 날짜 설정
      onChange: function (selectedDates, dateStr) {
        selectedCard.dates.includes(dateStr) ? selectedDateEl.textContent = dateStr : alert('다른 날짜를 입력해주세요!');
        console.log(selectedDates);
      }
      // 매개변수로 두개를 받지만 따지고 보면 dateStr만 사용이됨
      // selectedCard.dates 배열에 dateStr 값이 포함되어 있는지 확인.
      // includes 메서드는 dateStr가 selectedCard.dates 배열에 존재하면 true를 반환 dateStr을 selectedDateEl에 작성, 존재하지 않으면 false를 반환.
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
// 각각의 변수에 각각의 클래스 이름에 해당하는 부분을 찾아서 변수에 저장

function updatePrice() {
  // 수량과 가격을 업데이트 하는 함수를 정의함 
  const quantity = parseInt(totalQuantity.textContent, 10);
  // 정수로 변환 하여 quantity에 저장 ,10 : 10진수로 변환 한다는 뜻
  const price = quantity * unitPrice;
  // 변환된 정수와 unitPrice 를 곱해서 price에 저장;
  totalPrice.textContent = `${price.toLocaleString()} 원`;
  // // 총합 가격의 텍스트 내용을 price 값으로 설정하고, 숫자를 지역 형식으로 변환
  selectedQuantityEl.textContent = quantity;
  // // selectedQuantityEl의 텍스트 내용을 quantity 값으로 설정해요.
}

minusBtn.addEventListener('click', () => {
  let quantity = parseInt(totalQuantity.textContent, 10);
  if (quantity > 0) { // 최소 수량은 0으로 설정
    quantity -= 1;
    totalQuantity.textContent = quantity;
    updatePrice();
  }
});
// 마이너스 버튼을 클릭했을 때 수량이 0보다 크다면 수량에서 -1을 뺀값을 totalQuantity에 추가하고 그값을 quantity에 할당한 행동이 일어난다.

plusBtn.addEventListener('click', () => {
  let quantity = parseInt(totalQuantity.textContent, 10);
  quantity += 1;
  totalQuantity.textContent = quantity;
  updatePrice();
});
// 마이너스 버튼과 반대라고 생각하면됨

// 페이지 로드 시 초기 수량 및 가격 설정
totalQuantity.textContent = '0';
updatePrice();
