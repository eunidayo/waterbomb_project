// .category span
const Buttons = document.querySelectorAll('.category span');

Buttons.forEach(Button => {
  // 마우스가 버튼에 진입할 때
  Button.addEventListener('mouseenter', function () {
    this.style.color = "#4DFF4D"; // 글자색 변경
  });

  // 마우스가 버튼에서 빠져나갈 때
  Button.addEventListener('mouseleave', function () {
    this.style.color = ""; // 원래 글자색으로
  });
});


// .mtpageTop .btn_logout
const logoutButton = document.querySelector('.mypageTop .btn_logout');

// 마우스가 버튼에 진입할 때
logoutButton.addEventListener('mouseenter', function () {
  this.style.boxShadow = "inset 0px 3px 10px rgba(0, 0, 0, 0.5)";// 그림자 변경
});

// 마우스가 버튼에서 빠져나갈 때
logoutButton.addEventListener('mouseleave', function () {
  this.style.boxShadow = ""; //원래 그림자로
});

