export default async function getLinkToImage(city) {
    try {
        const IMAGE_API_TOKEN = 'a20d9b8dc1f6e77d27b52b46a8ae17b85ccce68b3b33ce341f565de7698e8207';

        return fetch(`https://api.unsplash.com/photos/random?query=town,${city}&client_id=${IMAGE_API_TOKEN}`)
            .then(response => response.json());
    } catch (e) {
        console.log(e);
    }
}