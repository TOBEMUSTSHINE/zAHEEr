document.addEventListener('DOMContentLoaded', () => {
  const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  // Display the current time in UTC
  const updateTime = () => {
    const now = new Date();
    let hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    currentTimeUTC.textContent = `Current Time (UTC): ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  };

  // Display the current day of the week
  const updateDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    currentDay.textContent = `Current Day: ${days[now.getUTCDay()]}`;
  };

  updateTime();
  updateDay();
  setInterval(updateTime, 1000); // Update the time every second
});
