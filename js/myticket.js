function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("availableTickets").style.display = "block";
  var defaultTab = document.querySelector(".tablink");
  if (defaultTab) {
    defaultTab.className += " active";
  }
  initializeSwiper();
  loadTickets();
});
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
          <div class="ticket-body">
            <div class="qr-code">
              <i class="fas fa-qrcode"></i>
            </div>
            <div class="ticket-info">
              <p>예매번호: ${ticket.bookingNumber}</p>
              <p>장소: ${ticket.location}</p>
              <p>날짜: ${ticket.date}</p>
              <p>시간: ${ticket.time}</p>
              <p>좌석 등급: ${ticket.seatGrade}</p>
            </div>
          </div>
          <div class="ticket-footer">
            <button class="confirm-btn"> <i class="fa-solid fa-download"></i>저장</button>
          </div>
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