export default function renderForecastInfo(currently, city) {
    const { summary, icon, apparentTemperature, humidity, windSpeed } = currently;
    const infoContainer = document.createDocumentFragment();

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
    infoContainer.appendChild(iconEl);

    // summary
    const summaryEl = document.createElement('p');
    summaryEl.innerText = summary;
    infoContainer.appendChild(summaryEl);

    // city
    const cityEl = document.createElement('p');
    cityEl.innerText = city;
    infoContainer.appendChild(cityEl);

    return infoContainer;
}