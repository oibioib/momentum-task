// import getGithubImgLink from '../services/github-img-link';
import { getGithubCurrentImgNum, getImageServicesState, getTagsState, prefix, setGithubCurrentImgNum } from '../services/localstorage';
import { sliderPrevBtn, sliderNextBtn } from '../services/selectors';
import { getTimeOfDay } from './greeting';
import getUnsplashImg from '../services/unsplash';
import getFlickrImg from '../services/flickr';

const linkTemplate = 'https://raw.githubusercontent.com/oibioib/momentum-task-data/main/images/';
const imgFrom = 1;
const imgTo = 20;
const imgNumMaxDigits = imgTo.toString()
    .length;
let inTransition = false;

export const getRandomNum = (from, to) => {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkNum = (num, from = null, to = null) => {
    if (num === 0) return to;
    if (!num) return getRandomNum(from, to);
    if (num < from) return to;
    if (num > to) return from;
    return num;
};

const getGithubImgLink = (num = null) => {
    const imgNum = checkNum(num, imgFrom, imgTo);
    setGithubCurrentImgNum(imgNum);
    const imgNumConvertedToMaxDigits = `${imgNum}`.padStart(imgNumMaxDigits, '0');
    return `${linkTemplate}${getTimeOfDay(new Date().getHours())}/${imgNumConvertedToMaxDigits}.jpg`;
};

const loadImg = (img) => new Promise((resolve, reject) => {
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', reject);
});

const setBg = async (num = null, service = null, tag = null) => {
    const img = new Image();
    img.src = getGithubImgLink(num);
    if (service === 'flickr') img.src = await getFlickrImg(tag);
    if (service === 'unsplash') img.src = await getUnsplashImg(tag);

    inTransition = true;
    await loadImg(img);
    document.body.style.backgroundImage = `url(${img.src})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    inTransition = false;
};

const choseItem = (obj) => {
    const items = Object.entries(obj)
        .filter(([_, state]) => state)
        .map(([item, _]) => item);
    const { length } = items;
    if (length) {
        return items[getRandomNum(0, length - 1)];
    }
    return null;
};

export const choseImageService = () => choseItem(getImageServicesState() || {});
export const choseImageTag = () => choseItem(getTagsState() || {});

sliderPrevBtn.addEventListener('click', () => {
    const selectedImageService = choseImageService();
    const selectedTags = choseImageTag();
    if (!inTransition) {
        setBg(getGithubCurrentImgNum() - 1, selectedImageService, selectedTags);
    }
});

sliderNextBtn.addEventListener('click', () => {
    const selectedImageService = choseImageService();
    const selectedTags = choseImageTag();
    if (!inTransition) {
        setBg(getGithubCurrentImgNum() + 1, selectedImageService, selectedTags);
    }
});

export default setBg;
