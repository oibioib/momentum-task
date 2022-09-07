import { getTimeOfDay } from '../modules/greeting';

const getFlickrImg = async (tag = null) => {
    let currentTag = tag;
    if (!tag) {
        currentTag = getTimeOfDay(new Date().getHours());
    }
    const link = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=73876b1d2f962cc3214966f098e61555&tags=${currentTag}&extras=url_l&format=json&nojsoncallback=1&per_page=1`;
    const res = await fetch(link);
    const data = await res.json();
    return data.photos.photo[0].url_l;
};

export default getFlickrImg;
