export default function getAdditionalImageParams(timezone, language) {
    // get daytime
    const dayOptions = {
        timezone,
        hour12: false,
        hour: 'numeric'
    };
    const date = new Date().toLocaleString(language, dayOptions);

    let dayTime = 'day';
    if (Number(date) > 21 || Number(date) < 6) {
        dayTime = 'night';
    }

    // get season
    const seasonMap = {
        'December': 'winter',
        'January': 'winter',
        'February': 'winter',
        'March': 'spring',
        'April': 'spring',
        'May': 'spring',
        'June': 'summer',
        'July': 'summer',
        'August': 'summer',
        'September': 'autumn',
        'October': 'autumn',
        'November': 'autumn'
    };

    const seasonOptions = {
        timezone,
        month: 'long'
    };
    const month = new Date().toLocaleString(language, seasonOptions);

    return {
        'daytime': dayTime,
        'season': seasonMap[month]
    };
}