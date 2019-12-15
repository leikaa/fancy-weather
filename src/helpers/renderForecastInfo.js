export default function renderForecastInfo(currently, daily, city, timezone, language, country, countryMap) {
    const { summary, icon, apparentTemperature, humidity, windSpeed, temperature } = currently;

    // icons map
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

    // date time options
    const options = {
        timezone,
        hour12: false,
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric'
    };
    const date = new Date().toLocaleString(language, options);

    // location name
    country = country.toUpperCase();
    const countryName = countryMap[country] ? countryMap[country] : countryMap['default'];
    const divLocationName = document.createElement('div');
    divLocationName.innerText = `${city}, ${countryName}`;
    divLocationName.className = 'weather-info__forecast-block-location-name';

    // location date-time
    const divLocationDateTime = document.createElement('div');
    divLocationDateTime.className = 'weather-info__forecast-block-date-time';

    const divLocationDate = document.createElement('div');
    divLocationDate.innerText = `${date}`;
    divLocationDate.className = 'weather-info__forecast-block-date-time_date';
    divLocationDateTime.appendChild(divLocationDate);

    // location weather forecast info block
    const divLocationWeatherInfo = document.createElement('div');
    divLocationWeatherInfo.className = 'weather-info__forecast-block-weather-info';

    const divLocationTemperature = document.createElement('div');
    divLocationTemperature.innerHTML = `${Math.round(temperature)}&deg;`;
    divLocationTemperature.className = 'weather-info__forecast-block-weather-info_temperature';
    divLocationWeatherInfo.appendChild(divLocationTemperature);

    const divLocationForecastInfo = document.createElement('div');
    divLocationForecastInfo.className = 'weather-info__forecast-block-weather-info_forecast';
    divLocationWeatherInfo.appendChild(divLocationForecastInfo);

    // icon
    const iconEl = document.createElement('i');
    iconEl.className = weatherIconClassName[icon] ? weatherIconClassName[icon] : weatherIconClassName['default'];
    divLocationForecastInfo.appendChild(iconEl);

    // summary
    const DivSummary = document.createElement('div');
    DivSummary.innerText = summary;
    DivSummary.className = 'weather-info__forecast-block-weather-info_summary';
    divLocationForecastInfo.appendChild(DivSummary);

    // feels like
    const DivFeelsLike = document.createElement('div');
    DivFeelsLike.innerHTML = `feels like: ${Math.round(apparentTemperature)}&deg;`;
    DivFeelsLike.className = 'weather-info__forecast-block-weather-info_feels';
    divLocationForecastInfo.appendChild(DivFeelsLike);

    // wind
    const DivWind = document.createElement('div');
    const windSpeedInMeters = ((windSpeed * 1000) / 3600).toFixed(2);
    DivWind.innerHTML = 'wind: '.toUpperCase() + `${windSpeedInMeters} m/s`;
    DivWind.className = 'weather-info__forecast-block-weather-info_wind';
    divLocationForecastInfo.appendChild(DivWind);

    // humidity
    const DivHumidity = document.createElement('div');
    const humidityInPercents = humidity * 100;
    DivHumidity.innerHTML = `humidity: ${humidityInPercents}%`;
    DivHumidity.className = 'weather-info__forecast-block-weather-info_humidity';
    divLocationForecastInfo.appendChild(DivHumidity);

    // next 3 days weather forecast
    const divNextDaysForecast = document.createElement('div');
    divNextDaysForecast.className = 'weather-info__forecast-block-weather-info_next-days';
    divLocationWeatherInfo.appendChild(divNextDaysForecast);

    const nextDayOptions = {
        timezone,
        weekday: 'long'
    };

    for (let i = 1; i <= 3; i++) {
        const { time, icon, temperatureMax, temperatureMin } = daily.data[i];
        const temperatureAvg = Math.floor((temperatureMax + temperatureMin) / 2);

        const nextDate = new Date(time * 1000).toLocaleString(language, nextDayOptions);

        const divNextDay = document.createElement('div');
        divNextDay.className = 'weather-info__forecast-block-weather-info_next-day';

        const divNextDayName = document.createElement('div');
        divNextDayName.innerHTML = nextDate;
        divNextDayName.className = 'weather-info__forecast-block-weather-info_next-day-name';
        divNextDay.appendChild(divNextDayName);

        const divNextDayTemperature = document.createElement('div');
        divNextDayTemperature.innerHTML = `${temperatureAvg}&deg;`;
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

    return divForecastLeftBlock;
}