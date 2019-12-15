export default function renderTime(time, language, timezone, date) {
  const result = time.split(':');
  let seconds = Number(result[2]);
  let minutes = Number(result[1]);
  let hours = Number(result[0]);

  setInterval(function () {
    let secondsToRender = seconds;
    let minutesToRender = minutes;
    let hoursToRender = hours;

    if (seconds.toString().length === 1) {
      secondsToRender = `0${seconds}`;
    }
    if (minutes.toString().length === 1) {
      minutesToRender = `0${minutes}`;
    }
    if (hours.toString().length === 1) {
      hoursToRender = `0${hours}`;
    }

    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      if (minutes === 60) {
        hours++;
        minutes = 0;
        if (hours === 24) {
          hours = 0;
        }
      }
    }

    if (secondsToRender === `00`) {
      document.querySelector('.weather-info__forecast-block-date-time_date').innerText = `${date.slice(0, -5)}${hoursToRender}:${minutesToRender}`;
    }
  }, 1000);
}
