import getLinkToImage from './getLinkToImage';
import getSearchLocationCoordinates from "./getSearchLocationCoordinates";
import getWeatherForecast from "./getWeatherForecast";
import renderForecastInfo from "./renderForecastInfo";
import {countryMap} from "./countryCodesMap";
import renderMapBlock from "./renderMapBlock";
import getAdditionalImageParams from "./getAdditionalImageParams";

export default function setTopPanelEvents(currently, daily, language, timezone) {
    // change degrees section
    function toCelsius(temperature) {
        return Math.round((Number(temperature) - 32) * 5 / 9);
    }

    function renderDegrees(degreeType, currently, daily) {
        const { apparentTemperature, temperature } = currently;
        let calcTemperature = temperature;
        let calcApparentTemperature = apparentTemperature;

        if (degreeType === 'celsius') {
            calcTemperature = toCelsius(temperature);
            calcApparentTemperature = toCelsius(apparentTemperature);
        }
        document.querySelector('.weather-info__forecast-block-weather-info_temperature').innerHTML = `${Math.round(calcTemperature)}&deg;`;
        document.querySelector('.weather-info__forecast-block-weather-info_feels').innerHTML = `feels like: ${Math.round(calcApparentTemperature)}&deg;`;

        for (let i = 1; i <= 3; i++) {
            const { temperatureMax, temperatureMin } = daily.data[i];
            let temperatureAvg = Math.floor((temperatureMax + temperatureMin) / 2);
            if (degreeType === 'celsius') {
                temperatureAvg = toCelsius(temperatureAvg)
            }
            document.querySelector(`.weather-info__forecast-block-weather-info_next-day:nth-child(${i}) .weather-info__forecast-block-weather-info_next-day-temperature`).innerHTML = `${temperatureAvg}&deg;`;
        }
    }

    function changeDegreesByType(currently, daily) {
        localStorage.setItem('language', language);
        // change degrees to fahrenheit
        document.querySelector('.weather-info__top-panel-switch-temperature_fahrenheit').addEventListener('click', function () {
            document.querySelector('.weather-info__top-panel-switch-temperature_celsius').classList.remove('active');
            this.classList.add('active');
            renderDegrees('fahrenheit', currently, daily);
            localStorage.setItem('temperature', 'fahrenheit');
        });
        // change degrees to celsius
        document.querySelector('.weather-info__top-panel-switch-temperature_celsius').addEventListener('click', function () {
            document.querySelector('.weather-info__top-panel-switch-temperature_fahrenheit').classList.remove('active');
            this.classList.add('active');
            renderDegrees('celsius', currently, daily);
            localStorage.setItem('temperature', 'celsius');
        });
        if (localStorage.getItem('temperature') && localStorage.getItem('temperature') === 'celsius') {
            document.querySelector('.weather-info__top-panel-switch-temperature_celsius').click();
        }
    }

    // change background image section
    function changeBackground(currently, timezone, language) {
        const { daytime, season } = getAdditionalImageParams(timezone, language);
        async function setBackground() {
            const { urls } = await getLinkToImage(currently, daytime, season);
            document.querySelector('.weather-info').style.backgroundImage = `linear-gradient(180deg, rgba(8, 15, 26, 0.79) 0%, rgba(17, 17, 46, 0.66) 100%), url(${urls.regular})`;
        }
        // remove events to prevent additional requests
        document.querySelector('.weather-info__top-panel-switch-image').removeEventListener("click", setBackground);
        document.querySelector('.weather-info__top-panel-switch-image').addEventListener('click', setBackground);
    }
    changeBackground(currently, timezone, language);

    // language switcher section
    document.querySelector('.weather-info__top-panel-switch-language').addEventListener('click', () => {
        document.querySelector('.weather-info__top-panel-switch-language_list').classList.toggle('visible');
        document.querySelector('.weather-info__top-panel-switch-language_title').classList.toggle('clicked');
    });

    changeDegreesByType(currently, daily);

    // get location rendering according to search section
    document.querySelector('.weather-info__top-panel-submit').addEventListener('click', async function() {
        const location = document.querySelector('.weather-info__top-panel-search').value;

        if (location.length === 0) {
            return;
        }

        const { results } = await getSearchLocationCoordinates(location);
        let locationData = results;
        if (results.length > 1) {
            locationData = results[0];
        }
        const { geometry, components } = locationData;

        if (geometry === undefined) {
            return;
        }

        const { lat, lng } = geometry;
        const { country_code } = components;
        const locCoords = `${lat},${lng}`;

        const { currently, daily, timezone } = await getWeatherForecast(locCoords, language);

        let killId = setTimeout(function() {
          for (let i = killId; i > 0; i--) clearInterval(i)
        }, 0);

        const leftForecastBlock = renderForecastInfo(currently, daily, location, timezone, language, country_code, countryMap);
        document.querySelector('.weather-info__forecast-block').replaceWith(leftForecastBlock);
        changeDegreesByType(currently, daily);
        changeBackground(currently, timezone, language);
        const rightMapBlock = renderMapBlock(locCoords);
        document.querySelector('.weather-info__map-block').replaceWith(rightMapBlock);
    });

    // ability to search by pressing enter
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            document.querySelector('.weather-info__top-panel-submit').click();
        }
    });
}
