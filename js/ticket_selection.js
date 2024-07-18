const cardsData = [
  {
    location: "SEOUL",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.5.7 (FRI-SUN)",
    dates: ["2024-05-07", "2024-05-08", "2024-05-09"],
  },
  {
    location: "JEJU",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.7.20 (SAT)",
    dates: ["2024-07-20"],
  },
  {
    location: "DAEGU",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.6.15 (SAT)",
    dates: ["2024-06-15"],
  },
  {
    location: "BUSAN",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.5.25 (SAT)",
    dates: ["2024-05-25"],
  },
  {
    location: "INCHEON",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.8.3 (SAT)",
    dates: ["2024-08-03"],
  },
  {
    location: "DAEJEON",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.6.29 (SAT)",
    dates: ["2024-06-29"],
  },
  {
    location: "SOKCHO",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.7.6 (SAT)",
    dates: ["2024-07-06"],
  },
  {
    location: "SUWON",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.5.17 (FRI-SUN)",
    dates: ["2024-05-17", "2024-05-18", "2024-05-19"],
  },
  {
    location: "YEOSU",
    logo: "WATERBOMB",
    year: "2024",
    date: "2024.8.10 (SAT)",
    dates: ["2024-08-10"],
  },
];

let cardsHTML = "";
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

const cardsContainer = document.querySelector("#cards-container");
const selectedCardEl = document.querySelector("#selected-card");
const selectedDateEl = document.querySelector("#selected-date");
const selectedQuantityEl = document.querySelector("#selected-quantity");
cardsContainer.innerHTML = cardsHTML;

// 수량 및 가격 업데이트 기능 추가
const minusBtn = document.querySelector(".fa-square-minus");
const plusBtn = document.querySelector(".fa-square-plus");
const totalQuantity = document.querySelector(".totalQuantity");
const totalPrice = document.querySelector(".totalPrice span");
const unitPrice = 110000; // 단위 가격 설정

function updatePrice() {
  const quantity = parseInt(totalQuantity.textContent, 10);
  const price = quantity * unitPrice;
  totalPrice.textContent = `${price.toLocaleString()} 원`;
  selectedQuantityEl.textContent = quantity; // 선택한 수량을 업데이트
}

minusBtn.addEventListener("click", () => {
  let quantity = parseInt(totalQuantity.textContent, 10);
  if (quantity > 0) {
    quantity -= 1;
    totalQuantity.textContent = quantity;
    updatePrice();
  }
});

plusBtn.addEventListener("click", () => {
  let quantity = parseInt(totalQuantity.textContent, 10);
  quantity += 1;
  totalQuantity.textContent = quantity;
  updatePrice();
});

// 페이지 로드 시 초기 수량 및 가격 설정
totalQuantity.textContent = "0";
updatePrice();
