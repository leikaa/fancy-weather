export default async function getSearchLocationCoordinates(location) {
  try {
    const SEARCH_LOCATION_API_TOKEN = '33b970e3928f43e0a50be991fca89565';

    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${SEARCH_LOCATION_API_TOKEN}&pretty=1&no_annotations=1`)
      .then(response => response.json());
  } catch (e) {
    return console.log(e);
  }
}
