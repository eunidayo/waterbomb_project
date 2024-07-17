document.addEventListener("DOMContentLoaded", function () {
  const calendarElement = document.getElementById("calendar");
  const today = new Date();
  let selectedDate = today;

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  function renderCalendar(year, month, enabledDates = [], defaultDate) {
    calendarElement.innerHTML = "";

    const calendarHeader = document.createElement("div");
    calendarHeader.className = "calendar-header";

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&lt;";
    prevButton.addEventListener("click", () => {
      const prevMonth = new Date(year, month - 1, 1);
      renderCalendar(
        prevMonth.getFullYear(),
        prevMonth.getMonth(),
        enabledDates,
        defaultDate
      );
    });

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&gt;";
    nextButton.addEventListener("click", () => {
      const nextMonth = new Date(year, month + 1, 1);
      renderCalendar(
        nextMonth.getFullYear(),
        nextMonth.getMonth(),
        enabledDates,
        defaultDate
      );
    });

    const monthYearDisplay = document.createElement("h2");
    monthYearDisplay.textContent = `${year}년 ${month + 1}월`;

    calendarHeader.appendChild(prevButton);
    calendarHeader.appendChild(monthYearDisplay);
    calendarHeader.appendChild(nextButton);

    const calendarGrid = document.createElement("div");
    calendarGrid.className = "calendar-grid";

    // 요일 표시
    weekDays.forEach((day) => {
      const weekDayCell = document.createElement("div");
      weekDayCell.className = "calendar-weekday";
      weekDayCell.textContent = day;
      calendarGrid.appendChild(weekDayCell);
    });

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement("div");
      calendarGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      const dayCell = document.createElement("div");
      dayCell.className = "calendar-day";
      dayCell.textContent = day;

      // 오늘 날짜 표시
      const todayStr = `${today.getFullYear()}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      if (dateStr === todayStr) {
        dayCell.classList.add("today");
      }

      // 지난 날짜 선택 불가
      const currentDate = new Date(dateStr);
      if (currentDate < today) {
        dayCell.style.color = "lightgray";
      } else if (enabledDates.includes(dateStr)) {
        dayCell.addEventListener("click", () => {
          selectedDate = new Date(year, month, day);
          selectedDateEl.textContent = dateStr;
          renderCalendar(year, month, enabledDates, dateStr);
        });
      }

      if (dateStr === defaultDate) {
        dayCell.classList.add("selected");
      }
      calendarGrid.appendChild(dayCell);
    }

    calendarElement.appendChild(calendarHeader);
    calendarElement.appendChild(calendarGrid);
  }

  function resetSelectionInfo() {
    selectedCardEl.textContent = "없음";
    selectedDateEl.textContent = "없음";
    selectedQuantityEl.textContent = "0";
    totalQuantity.textContent = "0"; // 수량 초기화
    totalPrice.textContent = "0 원"; // 총 결제 금액 초기화
  }

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.getAttribute("data-index");
      const selectedCard = cardsData[index];
      const defaultDate = selectedCard.dates[0];
      const defaultDateObj = new Date(defaultDate);
      const today = new Date();
      if (defaultDateObj < today) {
        return; // 지난 날짜의 카드 선택 시 아무 이벤트도 발생하지 않음
      }

      document
        .querySelectorAll(".card")
        .forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      resetSelectionInfo();
      selectedCardEl.textContent = `${selectedCard.location} - ${selectedCard.date}`;
      renderCalendar(
        defaultDateObj.getFullYear(),
        defaultDateObj.getMonth(),
        selectedCard.dates,
        defaultDate
      );
      selectedDateEl.textContent = defaultDate;
    });
  });

  renderCalendar(today.getFullYear(), today.getMonth());
});
