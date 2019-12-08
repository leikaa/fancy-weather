import getUserLocation from './helpers/getUserLocation';
import getWeatherForecast from './helpers/getWeatherForecast';
import renderWeatherApp from './helpers/renderWeatherApp';
import renderForecastInfo from './helpers/renderForecastInfo';
import getLinkToImage from './helpers/getLinkToImage';

async function init() {
    try {
        const language = 'ru';
        const { loc, city } = await getUserLocation();
        const { currently, daily } = await getWeatherForecast(loc, language);
        const { urls } = await getLinkToImage(city);
        //let urls = '';

        const forecastInfo = renderForecastInfo(currently, city);

        console.log(urls);
        renderWeatherApp(forecastInfo, urls, language);
    } catch (e) {
        console.log(e);
    }
}

init();
