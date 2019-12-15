export default async function getWeatherForecast(locationCoordinates, language) {
  try {
    const WEATHER_API_TOKEN = '53e63ca98a9117cd9ccffcf9f62efd6e';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://api.darksky.net/forecast/${WEATHER_API_TOKEN}/${locationCoordinates}?lang=${language}`;

    return fetch(proxyUrl + apiUrl)
      .then(response => response.json());
  } catch (e) {
    return console.log(e);
  }
}
