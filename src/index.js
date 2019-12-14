import getUserLocation from './helpers/getUserLocation';
import getWeatherForecast from './helpers/getWeatherForecast';
import renderWeatherApp from './helpers/renderWeatherApp';
import renderForecastInfo from './helpers/renderForecastInfo';
import renderTopPanel from './helpers/renderTopPanel';
import {countryMap} from './helpers/countryCodesMap';
import renderMapBlock from './helpers/renderMapBlock';
import getLinkToImage from './helpers/getLinkToImage';

async function init() {
    try {
        const language = 'en';
        const { loc, city, timezone, country } = await getUserLocation();
        const { currently, daily } = await getWeatherForecast(loc, language);
        const { urls } = await getLinkToImage(city);
        //let urls = '';

        const leftForecastBlock = renderForecastInfo(currently, daily, city, timezone, language, country, countryMap);
        const topPanelBlock = renderTopPanel(language);
        const rightMapBlock = renderMapBlock(loc);

        renderWeatherApp(urls, topPanelBlock, leftForecastBlock, rightMapBlock);
    } catch (e) {
        console.log(e);
    }
}

init();
