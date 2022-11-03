const monthsNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const daysNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export const getDate = timestamp => {
  const unixTimestamp = timestamp;
  const date = new Date(unixTimestamp * 1000);

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  let dayName = daysNames[day];

  // dayName-day-monthName-year
  return `${dayName}, ${day} ${monthsNames[month]} ${year}`;
};

export const getTime = timestamp => {
  const unixTimestamp = timestamp;
  const date = new Date(unixTimestamp * 1000);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  // hours:minutes:seconds
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};
