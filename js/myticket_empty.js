// 헤더 사이드바
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !sideMenu.contains(event.target) &&
      !hamburger.contains(event.target) &&
      !overlay.contains(event.target)
    ) {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  // 모든 탭 콘텐츠를 숨깁니다.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // 모든 탭 링크에서 "active" 클래스를 제거합니다.
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // 클릭된 탭 콘텐츠를 표시합니다.
  document.getElementById(tabName).style.display = "block";
  // 클릭된 탭 링크에 "active" 클래스를 추가합니다.
  evt.currentTarget.className += " active";
}
// 기본으로 첫 번째 탭을 표시합니다.
document.addEventListener("DOMContentLoaded", function () {
  // 사용 가능한 티켓 탭을 기본 활성화 상태로 설정
  document.getElementById("availableTickets").style.display = "block";
  var defaultTab = document.querySelector(".tablink");
  if (defaultTab) {
    defaultTab.className += " active";
  }
});
