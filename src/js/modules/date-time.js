import { getLang } from '../services/localstorage';

export const getTime = (date) => date.toLocaleTimeString().trim();

export const getDate = (date) => {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    const language = getLang();
    return date.toLocaleDateString(`${language.toLowerCase()}-${language.toUpperCase()}`, options);
};
