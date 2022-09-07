export const prefix = 'oibioib_';

const initBlocsSettings = {
    audio: true,
    weather: true,
    date: true,
    time: true,
    greeting: true,
    quotes: true,
    todo: true,
    links: true
};

const initServicesSettings = {
    github: true,
    flickr: false,
    unsplash: false
};

const initTagsSettings = {
    new: false,
    iceland: false,
    water: false,
    summer: false,
    bw: false,
    nature: false
};

// const addPrefix = (obj) => {
//     const newObj = {};
//     Object.entries(obj).forEach(([key, value]) => {
//         newObj[prefix + key] = value;
//     });
//     return newObj;
// };

const initSettings = {
    [`${prefix}language`]: 'en',
    [`${prefix}city`]: 'Minsk',
    [`${prefix}blocsSettings`]: JSON.stringify(initBlocsSettings),
    [`${prefix}imageServices`]: JSON.stringify(initServicesSettings),
    [`${prefix}imageTags`]: JSON.stringify(initTagsSettings),
    [`${prefix}audio`]: 0,
    [`${prefix}needBgReload`]: false
};

export const initApp = () => {
    Object.entries(initSettings)
        .forEach(([key, value]) => {
            if (!localStorage.getItem(key)) {
                localStorage.setItem(key, value);
            }
        });
};

export const getName = () => localStorage.getItem(`${prefix}name`);

export const getGithubCurrentImgNum = () => +localStorage.getItem(`${prefix}currentGithubImgNum`);
export const setGithubCurrentImgNum = (num) => localStorage.setItem(`${prefix}currentGithubImgNum`, num);

export const getLang = () => localStorage.getItem(`${prefix}language`);
export const setLang = (lang) => localStorage.setItem(`${prefix}language`, lang.toLowerCase());

export const getCity = () => localStorage.getItem(`${prefix}city`);
export const setCity = (city) => localStorage.setItem(`${prefix}city`, city);

export const getBlocsState = () => JSON.parse(localStorage.getItem(`${prefix}blocsSettings`));

export const setBlocsState = (blockSettings) => {
    const data = JSON.stringify(blockSettings);
    localStorage.setItem(`${prefix}blocsSettings`, data);
};

export const getTodoList = () => {
    const data = JSON.parse(localStorage.getItem(`${prefix}todo`));
    return data;
};

export const setTodoList = (todosObj) => {
    const data = JSON.stringify(todosObj);
    localStorage.setItem(`${prefix}todo`, data);
};

export const getAudio = () => +localStorage.getItem(`${prefix}audio`);
export const setAudio = (n) => localStorage.setItem(`${prefix}audio`, n);

export const getWeather = () => {
    const data = JSON.parse(localStorage.getItem(`${prefix}weather`));
    return data;
};

export const setWeather = (weartherObj) => {
    const data = JSON.stringify(weartherObj);
    localStorage.setItem(`${prefix}weather`, data);
};

export const getImageServicesState = () => JSON.parse(localStorage.getItem(`${prefix}imageServices`));

export const setImageServicesState = (blockSettings) => {
    const data = JSON.stringify(blockSettings);
    localStorage.setItem(`${prefix}imageServices`, data);
};

export const getTagsState = () => JSON.parse(localStorage.getItem(`${prefix}imageTags`));

export const setTagsState = (blockSettings) => {
    const data = JSON.stringify(blockSettings);
    localStorage.setItem(`${prefix}imageTags`, data);
};

export const getNeedBgReload = () => JSON.parse(localStorage.getItem(`${prefix}needBgReload`));

export const setNeedBgReload = (state) => {
    const data = JSON.stringify(state);
    localStorage.setItem(`${prefix}needBgReload`, data);
};
