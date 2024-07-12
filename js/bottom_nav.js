const myticketBtn = document.getElementById("myticket-btn");
const bottomNav = document.querySelector(".bottomNav");
const closeBtn = document.getElementById("close-btn");
const handlerBar = document.querySelector(".handlerBar");
let startY, currentY, bottomNavHeight;

myticketBtn.addEventListener("click", function () {
  bottomNav.style.transform = "translateY(0)";
});

closeBtn.addEventListener("click", function () {
  bottomNav.style.transform = "translateY(100px)";
});

handlerBar.addEventListener("mousedown", startDrag);
handlerBar.addEventListener("touchstart", startDrag);

function startDrag(event) {
  event.preventDefault();
  startY = event.clientY || event.touches[0].clientY;
  bottomNavHeight = bottomNav.getBoundingClientRect().height;
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchend", stopDrag);
}

function drag(event) {
  currentY = event.clientY || event.touches[0].clientY;
  const translateY = Math.min(
    100,
    Math.max(0, 100 - ((startY - currentY) / bottomNavHeight) * 100)
  );
  bottomNav.style.transform = `translateY(${translateY}px)`;
}

function stopDrag() {
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchend", stopDrag);
  if (
    parseFloat(
      bottomNav.style.transform.replace("translateY(", "").replace("px)", "")
    ) < 50
  ) {
    bottomNav.style.transform = "translateY(0)";
  } else {
    bottomNav.style.transform = "translateY(100px)";
  }
}
