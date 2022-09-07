import i18next from 'i18next';
import en from '../language/en';
import ru from '../language/ru';
import { getCity, getLang, getWeather, setCity, setLang } from '../services/localstorage';
import {
    languageCheckbox, settingsModal,
    blockAudio, blockDate, blockGreeting, blockLinks,
    blockQuotes, blockTime, blockTodo, blockWeather,
    greetingName, greetingText,
    todoBtn, todoClearAll, todoInput, todoModal, todoSubmit,
    weatherCity, weatherHumidity, weatherWind, weatherTemperature, weatherError,
    blockGithub, blockUnsplash, blockFlickr, settingsBlocksTitle, imageServicesTitle,
    tagNew, tagIceland, tagWater, tagSummer, tagBw, tagNature, tagsBlockTitle
} from '../services/selectors';
import { getTimeOfDay, updateGreetingNameWidth } from './greeting';
import updateQuoteHandler from './quotes';
// eslint-disable-next-line import/no-cycle
import getCurrentWeather from './weather';

const updateSettingBlocks = () => {
    blockAudio.querySelector('.setting__title').textContent = i18next.t('audio');
    blockWeather.querySelector('.setting__title').textContent = i18next.t('weather');
    blockDate.querySelector('.setting__title').textContent = i18next.t('date');
    blockTime.querySelector('.setting__title').textContent = i18next.t('time');
    blockGreeting.querySelector('.setting__title').textContent = i18next.t('greeting');
    blockQuotes.querySelector('.setting__title').textContent = i18next.t('quotes');
    blockTodo.querySelector('.setting__title').textContent = i18next.t('todo');
    blockLinks.querySelector('.setting__title').textContent = i18next.t('links');
    blockGithub.querySelector('.setting__title').textContent = i18next.t('github');
    blockUnsplash.querySelector('.setting__title').textContent = i18next.t('unsplash');
    blockFlickr.querySelector('.setting__title').textContent = i18next.t('flickr');
};

const updateTagsBlock = () => {
    tagNew.querySelector('.setting__title').textContent = i18next.t('new');
    tagIceland.querySelector('.setting__title').textContent = i18next.t('iceland');
    tagWater.querySelector('.setting__title').textContent = i18next.t('water');
    tagSummer.querySelector('.setting__title').textContent = i18next.t('summer');
    tagBw.querySelector('.setting__title').textContent = i18next.t('bw');
    tagNature.querySelector('.setting__title').textContent = i18next.t('nature');
};

const updateContent = () => {
    updateSettingBlocks();
    updateTagsBlock();
    greetingText.textContent = `${i18next.t(getTimeOfDay(new Date().getHours()))}`;
    greetingName.placeholder = i18next.t('placeholder');
    updateGreetingNameWidth();
    if (getCity() === i18next.getDataByLanguage('ru')
        .translation.city || getCity() === i18next.getDataByLanguage('en')
        .translation.city) {
        weatherCity.value = i18next.t('city');
        setCity(i18next.t('city'));
    } else {
        weatherCity.value = getCity();
    }

    settingsModal.querySelector('.modal__title')
        .textContent = i18next.t('settings');
    todoBtn.textContent = i18next.t('todo');
    todoModal.querySelector('.modal__title')
        .textContent = i18next.t('todo');
    todoInput.placeholder = i18next.t('todoPlaceholder');
    todoSubmit.textContent = i18next.t('add');
    todoClearAll.textContent = i18next.t('clear');
    weatherError.textContent = i18next.t('weather error');
    settingsBlocksTitle.textContent = i18next.t('imageBlock');
    imageServicesTitle.textContent = i18next.t('servicesBlock');
    tagsBlockTitle.textContent = i18next.t('tagsBlock');
};

export const updateWeather = (data) => {
    if (data) {
        weatherTemperature.textContent = i18next.t('temp', { temp: data.temp });
        weatherHumidity.textContent = i18next.t('humidity', { humidity: data.humidity });
        weatherWind.textContent = i18next.t('wind', { wind: data.wind });
    }
};

i18next.init({
    lng: getLang() || 'en',
    // debug: true,
    resources: {
        en: {
            translation: en
        },
        ru: {
            translation: ru
        }
    }
}, () => {
    updateContent();
});

const changeLng = (lng) => {
    const currentLanguage = getLang();
    i18next.changeLanguage(lng);
    setLang(lng);
    if (lng !== currentLanguage) updateQuoteHandler();
    getCurrentWeather(lng);
};

i18next.on('languageChanged', () => {
    updateContent();
    updateWeather(getWeather());
});

languageCheckbox.addEventListener('change', (e) => {
    if (e.currentTarget.checked) {
        changeLng('ru');
    } else {
        changeLng('en');
    }
});

export const updateGreeting = () => {
    greetingText.textContent = `${i18next.t(getTimeOfDay(new Date().getHours()))}`;
    greetingName.placeholder = i18next.t('placeholder');
    updateGreetingNameWidth();
};

export const changeLanguageToggleOnLoad = () => {
    if (getLang() === 'ru') languageCheckbox.setAttribute('checked', 'checked');
};
