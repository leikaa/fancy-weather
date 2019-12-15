export default function renderMapBlock(loc) {
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

  // get coords and render map section
  const coords = loc.split(',');
  setTimeout(() => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coords[1], coords[0]], // [lng, lat]
      zoom: 10,
    });
  }, 0);

  function getCoordinates(coords) {
    let minutes = 0;
    const coordinate = coords.split('.');
    if (coordinate.length > 1) {
      minutes = Math.round(Number(`0.${coordinate[1]}` * 60));
    }
    coordinate[1] = minutes;

    return coordinate;
  }
  const longitude = getCoordinates(coords[1]);
  const latitude = getCoordinates(coords[0]);

  const divLatitude = document.createElement('div');
  divLatitude.innerHTML = `Latitude: ${latitude[0]}&deg; ${latitude[1]}'`;
  divLatitude.className = 'weather-info__map-block_latitude';
  divMapRightBlock.appendChild(divLatitude);

  const divLongitude = document.createElement('div');
  divLongitude.innerHTML = `Longitude: ${longitude[0]}&deg; ${longitude[1]}'`;
  divLongitude.className = 'weather-info__map-block_longitude';
  divMapRightBlock.appendChild(divLongitude);

  return divMapRightBlock;
}
