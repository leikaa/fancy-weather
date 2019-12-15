export default function renderWeatherApp(urls, topPanelBlock, leftForecastBlock, rightMapBlock) {
  // wrapper
  const divWrapper = document.createElement('div');
  divWrapper.className = 'wrapper';

  // weather block
  const divWeatherBlock = document.createElement('div');
  divWeatherBlock.className = 'weather-info';
  divWeatherBlock.style.backgroundImage = `linear-gradient(180deg, rgba(8, 15, 26, 0.79) 0%, rgba(17, 17, 46, 0.66) 100%), url(${urls.regular})`;
  divWrapper.appendChild(divWeatherBlock);

  // inner content
  divWeatherBlock.appendChild(topPanelBlock);
  divWeatherBlock.appendChild(leftForecastBlock);
  divWeatherBlock.appendChild(rightMapBlock);

  document.querySelector('body').appendChild(divWrapper);
}
