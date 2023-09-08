// JavaScript to display the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const currentDay = daysOfWeek[today.getDay()];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day of the week: ${currentDay}`;

// JavaScript to display the current UTC time in milliseconds
const currentUTCTime = new Date().getTime();
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (ms): ${currentUTCTime}`;