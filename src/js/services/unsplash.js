import { getTimeOfDay } from '../modules/greeting';

const getUnsplashImg = async (tag = null) => {
    let currentTag = tag;
    if (!tag) {
        currentTag = getTimeOfDay(new Date().getHours());
    }
    const link = `https://api.unsplash.com/photos/random?orientation=landscape&query=${currentTag}&client_id=K1CgISQN7Epy_f9-WEBguDQYb5HqcLqqz17XQGtscqU`;
    const res = await fetch(link);
    const data = await res.json();
    return data.urls.regular;
};

export default getUnsplashImg;
