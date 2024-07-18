document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#availableTickets").style.display = "block";
  var defaultTab = document.querySelector(".tablink");
  if (defaultTab) {
    defaultTab.classList.add("active"); // 기본으로 첫 번째 탭 링크에 "active" 클래스 추가
  }
  initializeSwiper();
  loadTickets();
});

function openTab(evt, tabName) {
  var tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach(function (tab) {
    tab.style.display = "none";
  });

  var tablinks = document.querySelectorAll(".tablink");
  tablinks.forEach(function (tab) {
    tab.classList.remove("active"); // 모든 탭 링크에서 "active" 클래스 제거
  });

  document.querySelector("#" + tabName).style.display = "block";
  evt.currentTarget.classList.add("active"); // 클릭된 탭 링크에 "active" 클래스 추가
  // 스와이퍼 초기화
  initializeSwiper();
}

function initializeSwiper() {
  new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function loadTickets() {
  const ticketsContainer = document.querySelector('#tickets-container');
  let ticketsHTML = '';
  const ticketsData = [
    {
      bookingNumber: "2024000012987653",
      location: "SEOUL",
      date: "2024.7.5",
      time: "14:00",
      seatGrade: "VVIP",
      totalTickets: 2
    },
    {
      bookingNumber: "2024000012987654",
      location: "BUSAN",
      date: "2024.8.10",
      time: "18:00",
      seatGrade: "VIP",
      totalTickets: 1
    }
  ];
  ticketsData.forEach((ticket, index) => {
    ticketsHTML += `
      <div class="swiper-slide">
        <div class="ticket">
            <div class="qr-code">
            <img src="/waterbomb_project/image/myticket/qrcode.png" alt="qr">
            </div>
            <p>예매번호:<br> <span>${ticket.bookingNumber}</span></p>
            <p>장소: <span>${ticket.location}</span></p>
            <p>날짜: <span>${ticket.date}</span></p>
            <p>시간: <span>${ticket.time}</span></p>
            <p>좌석 등급: <span>${ticket.seatGrade}</span></p>
            <button class="confirm-btn"> <i class="fa-solid fa-download"></i>저장</button>
        </div>
      </div>
    `;
  });
  ticketsContainer.innerHTML = ticketsHTML;
  document.querySelectorAll('.confirm-btn').forEach(button => {
    button.addEventListener('click', function () {
      alert('저장 되었습니다!');
    });
  });
  initializeSwiper();  // 티켓 로딩 후 스와이퍼 초기화
}