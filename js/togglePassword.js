const togglePassword = document.querySelector(".togglePassword");
const passwordInput = document.querySelector(".passwordInput");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    // passwordInput 요소의 type 속성이 “password”인지 확인. passwordInput이 비밀번호 입력 필드인지를 확인하는 조건문.
    passwordInput.type = "text";
    // passwordInput 요소의 type 속성을 “text”로 변경. 이 줄은 위의 조건문이 참일 때 실행되며, 비밀번호를 일반 텍스트로 표시.
  } else {
    passwordInput.type = "password";
    // passwordInput의 타입을 다시 password로 변경
  }
});
