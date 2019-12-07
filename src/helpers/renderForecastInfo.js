export default function renderForecastInfo(currently, city) {
    const { summary, icon, apparentTemperature, humidity, windSpeed } = currently;
    const infoContainer = document.createDocumentFragment();

    // icon
    const weatherIconClassName = {
        'partly-cloudy-night': 'icon wi wi-night-partly-cloudy',
    };

    const iconEl = document.createElement('i');
    //iconEl.className = weatherIconClassName[icon];
    iconEl.className = 'partly-cloudy-night';
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