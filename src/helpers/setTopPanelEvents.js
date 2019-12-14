import getLinkToImage from './getLinkToImage';

export default function setTopPanelEvents(currently, daytime, season) {
    document.querySelector('.weather-info__top-panel-switch-image').addEventListener('click', async function () {
        const { urls } = await getLinkToImage(currently, daytime, season);
        document.querySelector('.weather-info').style.backgroundImage = `linear-gradient(180deg, rgba(8, 15, 26, 0.79) 0%, rgba(17, 17, 46, 0.66) 100%), url(${urls.regular})`;
    });

    document.querySelector('.weather-info__top-panel-switch-language').addEventListener('click', function () {
        document.querySelector('.weather-info__top-panel-switch-language_list').classList.toggle('visible');
        document.querySelector('.weather-info__top-panel-switch-language_title').classList.toggle('clicked');
    });

    document.querySelector('.weather-info__top-panel-switch-temperature_fahrenheit').addEventListener('click', function () {
        document.querySelector('.weather-info__top-panel-switch-temperature_celsius').classList.remove('active');
        this.classList.add('active');
    });

    document.querySelector('.weather-info__top-panel-switch-temperature_celsius').addEventListener('click', function () {
        document.querySelector('.weather-info__top-panel-switch-temperature_fahrenheit').classList.remove('active');
        this.classList.add('active');
    });
}