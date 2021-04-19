const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let futureDate = new Date(2021, 4, 14, 18, 8, 0);
let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
let date = futureDate.getDate();
let day = futureDate.getDay();

giveaway.textContent = `giveaway ends on 
${months[month]} ${date}, ${weekdays[day]} 
${year} ${hours}:${minutes} pm`;

const futureTime = futureDate.getTime();

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}

function getRemainingTime() {
  const today = new Date().getTime();
  const total = futureTime - today;

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinutes = 60 * 1000;

  let numOfDaysLeft = Math.floor(total / oneDay);
  let numofHoursLeft = Math.floor((total % oneDay) / oneHour);
  let numofMinsLeft = Math.floor((total % oneHour) / oneMinutes);
  let numofSecsLeft = Math.floor((total % oneMinutes) / 1000);

  const values = [numOfDaysLeft, numofHoursLeft, numofMinsLeft, numofSecsLeft];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
}

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
