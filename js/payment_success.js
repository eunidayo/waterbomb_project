// .sec03 .sec03Inner .info .infoQr .save
// 버튼 요소를 선택
const saveButton = document.querySelector('.sec03 .sec03Inner .info .infoQr .save');

// 마우스가 버튼에 진입할 때
saveButton.addEventListener('mouseenter', function () {
  this.style.backgroundColor = "#0AABFF";// 배경색 변경
  this.style.color = "#FFFFFF"; //글자색 변경
});

// 마우스가 버튼에서 빠져나갈 때
saveButton.addEventListener('mouseleave', function () {
  this.style.backgroundColor = ""; // 원래 배경색으로 복구
  this.style.color = ""; // 원래 글자색으로 복구 (기본 값으로 되돌리기)
});


// .sec03 .btn_confirm
// 버튼 요소를 선택
const confirmButton = document.querySelector('.btn_confirm');

// 마우스가 버튼에 진입할 때
confirmButton.addEventListener('mouseenter', function () {
  this.style.boxShadow = "inset 0px 3px 10px rgba(0, 0, 0, 0.2)";// 그림자 변경
  this.style.color = "#0AABFF";//글자색 변경
});

// 마우스가 버튼에서 빠져나갈 때
confirmButton.addEventListener('mouseleave', function () {
  this.style.boxShadow = ""; //원래 그림자로 복구
  this.style.color = ""; //원래 글자색으로 복구 (기본 값으로 되돌리기)
});



