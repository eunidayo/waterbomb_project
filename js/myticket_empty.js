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
// 사용 가능 티켓 탭구조
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
// 기본으로 첫 번째 탭 열기
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablink").click();
});
