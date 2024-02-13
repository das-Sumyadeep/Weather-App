import { DateTime } from "luxon";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(process.env.REACT_APP_BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: process.env.REACT_APP_API_KEY });

    return fetch(url)
        .then((res) => res.json());
};

const formatCurrentWeather = (data) => {

    const { coord: { lat, lon } } = data;

    return { lat, lon };
}

const formatForecastWeather = (data) => {

    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        timezone
    } = data;

    const { main, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, speed, main, icon, timezone };

}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
    .then((formatCurrentWeather));

    // console.log(formattedCurrentWeather)
    
    const { lat, lon } = formattedCurrentWeather;

    const { units } = searchParams;

    const formattedForecastWeather = await getWeatherData('weather',
        {
            lat,
            lon,
            units
        }).then((formatForecastWeather));

    // console.log(formattedForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
}

// localtime, date and timeZon
const calculateUtcTimezone = (offsetSeconds) => {
    const hours = Math.floor(Math.abs(offsetSeconds) / 3600);
    const minutes = Math.floor((Math.abs(offsetSeconds) % 3600) / 60);
    const sign = offsetSeconds < 0 ? '-' : '+';

    return `UTC${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

const formatToLocalTime = (secs, zone, format = "cccc, dd MMMM yyyy | hh:mm a") => {

    const TimeZone = calculateUtcTimezone(zone);

    return DateTime.fromSeconds(secs).setZone(TimeZone).toFormat(format);
};

const iconUrlFromCode = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
}


export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };