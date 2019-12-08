export default function renderMapBlock() {
    const divMapRightBlock = document.createElement('div');
    divMapRightBlock.className = 'weather-info__map-block';

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

    return divMapRightBlock;
}