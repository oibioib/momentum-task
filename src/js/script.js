// CSS
import '../css/style.scss';

// Services
import { timeElement, dateElement } from './services/selectors';
import { getGithubCurrentImgNum, initApp } from './services/localstorage';

// Modules
import { getTime, getDate } from './modules/date-time';
import { getTimeOfDay, saveName, setName, updateGreetingNameWidth } from './modules/greeting';
import setBg, { choseImageService, choseImageTag } from './modules/slider';
import getCurrentWeather from './modules/weather';
import { changeLanguageToggleOnLoad, updateGreeting } from './modules/language';
import updateQuoteHandler from './modules/quotes';
import modalsInit from './modules/modals';
import { updateBlocsCurrentState, updateBlocsCurrentOpacity, updateImageServicesCurrentState, updateTagsState } from './modules/settings';
import { loadTodoList, saveTodoList } from './modules/todo';
import initPlayList, { updateAudioTime, updateCurrentTrack, updateCurrentVolume } from './modules/audio';
import './self-test';

let prevTimeOfDay = getTimeOfDay(new Date().getHours());

const updateContentByTime = () => {
    const date = new Date();
    timeElement.textContent = getTime(date);
    dateElement.textContent = getDate(date);
    updateGreeting();
    const currentTimeOfDay = getTimeOfDay(date.getHours());
    if (prevTimeOfDay !== currentTimeOfDay) setBg();
    prevTimeOfDay = currentTimeOfDay;
    setTimeout(updateContentByTime, 1000);
};

const updateAudio = () => {
    updateAudioTime();
    updateCurrentTrack();
    updateCurrentVolume();
    setTimeout(updateAudio, 500);
};

window.addEventListener('load', () => {
    setName();
    updateGreetingNameWidth();
    initApp();
    updateContentByTime();
    updateAudio();
    setBg(getGithubCurrentImgNum() + 1, choseImageService(), choseImageTag());
    getCurrentWeather();
    updateQuoteHandler();
    changeLanguageToggleOnLoad();
    modalsInit();
    updateBlocsCurrentState();
    updateBlocsCurrentOpacity();
    updateImageServicesCurrentState();
    updateTagsState();
    loadTodoList();
    initPlayList();
});

window.addEventListener('beforeunload', () => {
    saveName();
    saveTodoList();
});
