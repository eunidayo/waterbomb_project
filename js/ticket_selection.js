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

let cardsHTML = '';
cardsData.forEach(card => {
  cardsHTML += `
      <div class="card">
          <div><h3>${card.logo}</h3></div>
          <p>${card.year}</p>
          <h2>${card.location}</h2>
          <p>${card.date}</p>
      </div>
  `;
});

cardsContainer.innerHTML = cardsHTML;
// datepicker script.js 파일

flatpickr("#datepicker-container", {
  inline: true, // 달력을 항상 표시
  dateFormat: "Y-m-d",
  minDate: "today",
  locale: 'ko',
});