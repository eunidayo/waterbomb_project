
// Data from the image
const events = [
  {
    city: "SEOUL",
    date: "7/5 - 7/7 [ FIR ]",
    venue: "KINTEX 야외 글로벌 스테이지"
  },
  {
    city: "JEJU",
    date: "7/13 [ SAT ]",
    venue: "제주종합경기장"
  },
  {
    city: "DAEGU",
    date: "7/20 [ SAT ]",
    venue: "대구 스타디움 주경기장"
  },
  {
    city: "BUSAN ",
    date: "7/27 [ SAT ]",
    venue: "북항친수공원  국제여객터미널"
  },
  {
    city: "INCHON",
    date: "8/3 [ SAT ]",
    venue: "상상플랫폼 야외광장"
  },
  {
    city: "DAEJEON",
    date: "8/10  [ SAT ]",
    venue: "목원대학교 대운동장"
  },
  {
    city: "SOKCHO",
    date: "8/17 [ SAT ]",
    venue: "한화리조트 설악"
  },
  {
    city: "SUWON",
    date: "8/24 [ SAT ]",
    venue: "수원대학교 대운동장"
  },
  {
    city: "YEOSU",
    date: "8/31 [ SAT ]",
    venue: "여수 엑스포 스카이타워 "
  }
];

// Get the container where cards will be displayed
const container = document.getElementById('event-container');

// Function to create a card for each event
events.forEach(event => {
  const card = document.createElement('div');
  card.classList.add('card');

  const city = document.createElement('h2');
  city.textContent = event.city;
  city.classList.add('event-city');
  card.appendChild(city);

  const details = document.createElement('div');
  details.classList.add('event-details');

  const date = document.createElement('p');
  date.textContent = event.date;
  details.appendChild(date);

  const venue = document.createElement('p');
  venue.textContent = event.venue;
  details.appendChild(venue);

  card.appendChild(details);
  container.appendChild(card);
});

