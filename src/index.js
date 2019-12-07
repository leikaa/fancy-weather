import getUserLocation from './helpers/getUserLocation';
import getWeatherForecast from './helpers/getWeatherForecast';
import renderWeatherApp from './helpers/renderWeatherApp';
import renderForecastInfo from './helpers/renderForecastInfo';

async function init() {
    try {
        const { loc, city } = await getUserLocation();
        const { currently, daily } = await getWeatherForecast(loc, 'ru');
        const forecastInfo = renderForecastInfo(currently, city);

        renderWeatherApp(forecastInfo);

        console.log(currently);
    } catch (e) {
        console.log(e);
    }
}

init();
