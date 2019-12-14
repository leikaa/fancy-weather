export default function renderMapBlock() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVpa2EiLCJhIjoiY2s0NTg0bmEwMDY4MTNsbGZrbWQ0ZTJ2ZCJ9.EwCBFvjABj3AtxUB6Ccq0g';

    const divMapRightBlock = document.createElement('div');
    divMapRightBlock.className = 'weather-info__map-block';

    const divMap = document.createElement('div');
    divMap.className = 'weather-info__map-block_map';
    divMapRightBlock.appendChild(divMap);

    const divInnerMap = document.createElement('div');
    divInnerMap.className = 'inner_map';
    divInnerMap.id = 'map';
    divMap.appendChild(divInnerMap);

    setTimeout(function () {
        new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40], // [lng, lat]
            zoom: 9
        });
    }, 0);

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