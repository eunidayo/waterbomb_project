// .fa-circle-arrow-up 클래스 이름을 가진 요소를 scrollToTopBtn 변수에 할당.
const scrollToTopBtn = document.querySelector(".fa-circle-arrow-up");

// 익명함수 표현식
// scrollToTopBtn 요소를 클릭하면 일어날 일을 콜백함수 안에 작성
scrollToTopBtn.addEventListener("click", function () {
  // window.scrollTo 👉 브라우저 창을 특정 위치로 스크롤하는 메서드
  window.scrollTo({
    // 스크롤의 목표 위치를 지정. 여기선 최상단(0)으로 설정.
    top: 0,
    // 스크롤 동작 방식 지정. "smooth"로 설정하면 부드럽게 스크롤된다.
    behavior: "smooth",
  });
});

// // 화살표 함수로도 표현 가능!
// scrollToTopBtn.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
