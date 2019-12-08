export default function renderWeatherApp(urls, language, currently) {
    // wrapper
    const divWrapper = document.createElement('div');
    divWrapper.className = 'wrapper';

    // weather block
    const divWeatherBlock = document.createElement('div');
    divWeatherBlock.className = 'weather-info';
    divWeatherBlock.style.backgroundImage = `linear-gradient(180deg, rgba(8, 15, 26, 0.79) 0%, rgba(17, 17, 46, 0.66) 100%), url(${urls.regular})`;
    divWrapper.appendChild(divWeatherBlock);

    // top left panel buttons
    const leftPanelButtonsContainer = document.createDocumentFragment();
    const divSwitchImage = document.createElement('div');
    divSwitchImage.className = 'button weather-info__top-panel-switch-image';
    leftPanelButtonsContainer.appendChild(divSwitchImage);

    const divSwitchLanguage = document.createElement('div');
    divSwitchLanguage.className = 'button weather-info__top-panel-switch-language';
    divSwitchLanguage.innerText = language.toUpperCase();
    leftPanelButtonsContainer.appendChild(divSwitchLanguage);

    const divSwitchTemperature = document.createElement('div');
    divSwitchTemperature.className = 'weather-info__top-panel-switch-temperature';
    const divFahrenheit = document.createElement('div');
    divFahrenheit.className = 'button weather-info__top-panel-switch-temperature_fahrenheit';
    divFahrenheit.innerHTML = '&deg;F';
    divSwitchTemperature.appendChild(divFahrenheit);
    const divCelsius = document.createElement('div');
    divCelsius.className = 'active button weather-info__top-panel-switch-temperature_celsius';
    divCelsius.innerHTML = '&deg;C';
    divSwitchTemperature.appendChild(divCelsius);
    leftPanelButtonsContainer.appendChild(divSwitchTemperature);

    // top right search panel
    const rightPanelSearchBarContainer = document.createDocumentFragment();
    const inputSearch = document.createElement('input');
    inputSearch.type = "text";
    inputSearch.className = 'weather-info__top-panel-search';
    rightPanelSearchBarContainer.appendChild(inputSearch);

    const inputSubmitSearch = document.createElement('div');
    inputSubmitSearch.innerText = 'search'.toUpperCase();
    inputSubmitSearch.className = 'button weather-info__top-panel-submit';
    rightPanelSearchBarContainer.appendChild(inputSubmitSearch);

    // top panel
    const divTopPanelBlock = document.createElement('div');
    divTopPanelBlock.className = 'weather-info__top-panel';

    const divLeftPanelBlock = document.createElement('div');
    divLeftPanelBlock.className = 'weather-info__top-panel_left';
    divLeftPanelBlock.appendChild(leftPanelButtonsContainer);
    divTopPanelBlock.appendChild(divLeftPanelBlock);

    const divRightPanelBlock = document.createElement('div');
    divRightPanelBlock.className = 'weather-info__top-panel_right';
    divRightPanelBlock.appendChild(rightPanelSearchBarContainer);
    divTopPanelBlock.appendChild(divRightPanelBlock);
    divWeatherBlock.appendChild(divTopPanelBlock);

    // weather forecast left block
    // location name
    const divLocationName = document.createElement('div');
    divLocationName.innerText = 'City, Country';
    divLocationName.className = 'weather-info__forecast-block-location-name';

    // location date-time
    const divLocationDateTime = document.createElement('div');
    divLocationDateTime.className = 'weather-info__forecast-block-date-time';

    const divLocationDate = document.createElement('div');
    divLocationDate.innerText = 'Mon 28 October';
    divLocationDate.className = 'weather-info__forecast-block-date-time_date';
    divLocationDateTime.appendChild(divLocationDate);

    const divLocationTime = document.createElement('div');
    divLocationTime.innerText = '17:23';
    divLocationTime.className = 'weather-info__forecast-block-date-time_time';
    divLocationDateTime.appendChild(divLocationTime);

    // location weather forecast info block
    const { summary, icon, apparentTemperature, humidity, windSpeed } = currently;

    const divLocationWeatherInfo = document.createElement('div');
    divLocationWeatherInfo.className = 'weather-info__forecast-block-weather-info';

    const divLocationTemperature = document.createElement('div');
    divLocationTemperature.innerHTML = '10&deg;';
    divLocationTemperature.className = 'weather-info__forecast-block-weather-info_temperature';
    divLocationWeatherInfo.appendChild(divLocationTemperature);

    const divLocationForecastInfo = document.createElement('div');
    divLocationForecastInfo.className = 'weather-info__forecast-block-weather-info_forecast';
    divLocationWeatherInfo.appendChild(divLocationForecastInfo);

    // icon
    const weatherIconClassName = {
        'clear-day': 'icon wi wi-day-sunny',
        'clear-night': 'icon wi wi-night-clear',
        'partly-cloudy-day': 'icon wi wi-day-cloudy',
        'partly-cloudy-night': 'icon wi wi-night-alt-cloudy',
        'cloudy': 'icon wi wi-cloudy',
        'rain': 'icon wi wi-rain',
        'sleet': 'icon wi wi-sleet',
        'snow': 'icon wi wi-snow',
        'wind': 'icon wi wi-strong-wind',
        'fog': 'icon wi wi-fog',
        'default': 'icon wi wi-na'
    };
    const iconEl = document.createElement('i');
    iconEl.className = weatherIconClassName[icon] ? weatherIconClassName[icon] : weatherIconClassName['default'];
    divLocationForecastInfo.appendChild(iconEl);

    // summary
    const DivSummary = document.createElement('div');
    DivSummary.innerText = 'overcast'.toUpperCase();
    DivSummary.className = 'weather-info__forecast-block-weather-info_summary';
    divLocationForecastInfo.appendChild(DivSummary);

    // feels like
    const DivFeelsLike = document.createElement('div');
    DivFeelsLike.innerHTML = 'feels like: '.toUpperCase() + '7&deg;';
    DivFeelsLike.className = 'weather-info__forecast-block-weather-info_feels';
    divLocationForecastInfo.appendChild(DivFeelsLike);

    // wind
    const DivWind = document.createElement('div');
    DivWind.innerHTML = 'wind: '.toUpperCase() + '2 m/s';
    DivWind.className = 'weather-info__forecast-block-weather-info_wind';
    divLocationForecastInfo.appendChild(DivWind);

    // humidity
    const DivHumidity = document.createElement('div');
    DivHumidity.innerHTML = 'humidity: 83%'.toUpperCase();
    DivHumidity.className = 'weather-info__forecast-block-weather-info_humidity';
    divLocationForecastInfo.appendChild(DivHumidity);

    // next 3 days weather forecast
    const divNextDaysForecast = document.createElement('div');
    divNextDaysForecast.className = 'weather-info__forecast-block-weather-info_next-days';
    divLocationWeatherInfo.appendChild(divNextDaysForecast);

    for (let i = 1; i <= 3; i++) {
        const divNextDay = document.createElement('div');
        divNextDay.className = 'weather-info__forecast-block-weather-info_next-day';

        const divNextDayName = document.createElement('div');
        divNextDayName.innerHTML = 'day' + i;
        divNextDayName.className = 'weather-info__forecast-block-weather-info_next-day-name';
        divNextDay.appendChild(divNextDayName);

        const divNextDayTemperature = document.createElement('div');
        divNextDayTemperature.innerHTML = '7&deg;';
        divNextDayTemperature.className = 'weather-info__forecast-block-weather-info_next-day-temperature';
        divNextDay.appendChild(divNextDayTemperature);

        const divNextDayIcon = document.createElement('div');
        divNextDayIcon.className = weatherIconClassName[icon] ? weatherIconClassName[icon] : weatherIconClassName['default'];
        divNextDay.appendChild(divNextDayIcon);

        divNextDaysForecast.appendChild(divNextDay);
    }

    const divForecastLeftBlock = document.createElement('div');
    divForecastLeftBlock.appendChild(divLocationName);
    divForecastLeftBlock.appendChild(divLocationDateTime);
    divForecastLeftBlock.appendChild(divLocationWeatherInfo);
    divForecastLeftBlock.className = 'weather-info__forecast-block';
    divWeatherBlock.appendChild(divForecastLeftBlock);

    // map right block
    const divMapRightBlock = document.createElement('div');
    divMapRightBlock.className = 'weather-info__map-block';
    divWeatherBlock.appendChild(divMapRightBlock);

    const divMap = document.createElement('div');
    divMap.className = 'weather-info__map-block_map';
    divMapRightBlock.appendChild(divMap);

    const divLatitude = document.createElement('div');
    divLatitude.innerHTML = 'Latitude: ' + '7&deg; 10\'';
    divLatitude.className = 'weather-info__map-block_latitude';
    divMapRightBlock.appendChild(divLatitude);

    const divLongitude = document.createElement('div');
    divLongitude.innerHTML = 'Longitude: ' + '7&deg; 10\'';
    divLongitude.className = 'weather-info__map-block_longitude';
    divMapRightBlock.appendChild(divLongitude);

    // add weather forecast info
    //divWeatherBlock.appendChild(forecastInfo);

    // append all blocks into body
    document.querySelector('body').appendChild(divWrapper);
}