export default async function getLinkToImage(currently, daytime, season) {
    try {
        const IMAGE_API_TOKEN = 'a20d9b8dc1f6e77d27b52b46a8ae17b85ccce68b3b33ce341f565de7698e8207';
        const { summary } = currently;

        // to make a better match for background image you can delete 2 of 3 parameters from ${season},${daytime},${summary} query string
        return fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=town,${season},${daytime},${summary}&client_id=${IMAGE_API_TOKEN}`)
            .then(response => response.json());
    } catch (e) {
        console.log(e);
    }
}