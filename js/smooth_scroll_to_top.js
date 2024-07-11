const scrollToTopBtn = document.querySelector(".fa-circle-arrow-up");

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
