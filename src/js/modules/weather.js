import { weatherCity, weatherDescription, weatherError, weatherHumidity, weatherIcon, weatherTemperature, weatherWind } from '../services/selectors';
import { getCity, getLang, setCity, setWeather } from '../services/localstorage';
// eslint-disable-next-line import/no-cycle
import { updateWeather } from './language';

const linkTemplate = 'https://api.openweathermap.org/data/2.5/weather?';
const getOptions = () => ({
    q: getCity(),
    lang: getLang(),
    units: 'metric',
    appid: '9bf1a00944ef158dee4e42f03361ef6e'
});

const prepareLink = (url, params) => {
    const urlParams = Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return url + urlParams;
};

const loadWeatherData = async (link) => {
    const res = await fetch(link);
    const data = await res.json();
    return data;
};

const prepareWeaterData = (weatherData) => ({
    city: getCity(),
    icon: weatherData.weather[0].id,
    temp: Math.floor(weatherData.main.temp),
    wind: Math.floor(weatherData.wind.speed),
    humidity: Math.floor(weatherData.main.humidity),
    description: weatherData.weather[0].description
});

const getWeather = async (link) => {
    try {
        const res = await loadWeatherData(link);
        if (res.cod !== 200) {
            weatherIcon.setAttribute('class', 'weather__icon owf');
            weatherDescription.textContent = '';
            weatherHumidity.textContent = '';
            weatherTemperature.textContent = '';
            weatherWind.textContent = '';
            weatherError.classList.add('show');
        } else {
            const data = prepareWeaterData(res);
            weatherError.classList.remove('show');
            weatherCity.value = data.city;
            weatherIcon.classList.add(`owf-${data.icon}`);
            weatherDescription.textContent = data.description;
            setWeather(data);
            updateWeather(data);
        }
    } catch (err) {
        // console.log(err);
    }
};

const getCurrentWeather = () => getWeather(prepareLink(linkTemplate, getOptions()));

weatherCity.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        setCity(event.currentTarget.value);
        getCurrentWeather();
    }
});

weatherCity.addEventListener('click', (event) => {
    const { currentTarget: input } = event;
    input.setSelectionRange(0, input.value.length);
    // input.selectionStart = input.value.length;
});

export default getCurrentWeather;
