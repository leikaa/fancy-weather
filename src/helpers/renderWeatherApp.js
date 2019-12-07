export default function renderWeatherApp(forecastInfo) {
    // wrapper
    const divWrapper = document.createElement('div');
    divWrapper.className = 'wrapper';

    // weather block
    const divWeatherBlock = document.createElement('div');
    divWeatherBlock.className = 'weather-info';
    divWrapper.appendChild(divWeatherBlock);

    // add weather forecast info
    divWeatherBlock.appendChild(forecastInfo);

    // append all blocks into body
    document.querySelector('body').appendChild(divWrapper);
}