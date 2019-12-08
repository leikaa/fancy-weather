export default async function getUserLocation() {
    try {
        const LOCATION_API_TOKEN = '2be969b2309564';

        return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`)
            .then(response => response.json());
    } catch (e) {
        console.log(e);
    }
}