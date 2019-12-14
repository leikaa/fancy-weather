import getLinkToImage from './getLinkToImage';

export default function setTopPanelEvents(currently, daytime, season) {
    document.querySelector('.weather-info__top-panel-switch-image').addEventListener('click', async function () {
        const { urls } = await getLinkToImage(currently, daytime, season);
        document.querySelector('.weather-info').style.backgroundImage = `linear-gradient(180deg, rgba(8, 15, 26, 0.79) 0%, rgba(17, 17, 46, 0.66) 100%), url(${urls.regular})`;
    });
}