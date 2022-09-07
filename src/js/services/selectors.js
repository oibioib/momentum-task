// Date and Time
export const timeElement = document.querySelector('.time');
export const dateElement = document.querySelector('.date');

// Greeting
export const greetingElement = document.querySelector('.greeting');
export const greetingText = document.querySelector('.greeting__text');
export const greetingName = document.querySelector('.greeting__name');

// Slider
export const sliderPrevBtn = document.querySelector('.slider__icon_prev');
export const sliderNextBtn = document.querySelector('.slider__icon_next');

// Quotes
export const quotesElement = document.querySelector('.quotes');
export const quotesChangeBtn = document.querySelector('.quotes__change-btn');
export const quoteText = document.querySelector('.quotes__text');
export const quoteAuthor = document.querySelector('.quotes__author');

// Weather
export const weatherElement = document.querySelector('.weather');
export const weatherCity = document.querySelector('.weather__city');
export const weatherIcon = document.querySelector('.weather__icon');
export const weatherDescription = document.querySelector('.weather__description');
export const weatherTemperature = document.querySelector('.weather__temperature');
export const weatherWind = document.querySelector('.weather__wind');
export const weatherHumidity = document.querySelector('.weather__humidity');
export const weatherError = document.querySelector('.weather__error');

// Language
export const languageCheckbox = document.querySelector('.language__checkbox');

// Modals
export const modals = document.querySelector('.modals');
export const modalsOverlay = document.querySelector('.modals__overlay');

// Todo
export const todoElement = document.querySelector('.todo');
export const todoInput = document.querySelector('.todo__input');
export const todoBtn = document.querySelector('.todo__button');
export const todoModal = document.querySelector('.todo-modal');
export const todoList = document.querySelector('.todo__list');
export const todoNum = document.querySelector('.todo__num');
export const todoClearAll = document.querySelector('.todo__clear-all');
export const todoCompleted = document.querySelector('.todo__completed');
export const todoSummary = document.querySelector('.todo__summary');

export const todoForm = document.getElementById('todoform');
export const todoSubmit = document.querySelector('.todo__submit');

// Audio
export const audio = document.querySelector('.audio');
export const audioElement = document.querySelector('.player');
export const audioBtnPrev = document.querySelector('.player__button_prev');
export const audioBtnPlay = document.querySelector('.player__button_play');
export const audioBtnNext = document.querySelector('.player__button_next');
export const playList = document.querySelector('.play__list');
export const audioTimeline = document.querySelector('.player__timeline');
export const audioPlogress = document.querySelector('.player__timeline-progress');
// export const audioTime = document.querySelector('.player__time');
export const audioTimeCurrent = document.querySelector('.player__time-current');
export const audioTimeFull = document.querySelector('.player__time-full');
export const audioCurrentTrack = document.querySelector('.player__current-track');
export const audioVolume = document.querySelector('.player__volume');
export const audioVolumeLevel = document.querySelector('.player__volume-level');
export const audioVolumeIco = document.querySelector('.volume-ico');

// Links
export const linksElement = document.querySelector('.panel-links');

// Settings
export const settingsBtn = document.querySelector('.settings__icon');
export const settingsModal = document.querySelector('.settings-modal');
export const blockOnOff = document.querySelector('.settings__block-onoff');
export const blockAudio = document.querySelector('.block-audio');
export const blockWeather = document.querySelector('.block-weather');
export const blockDate = document.querySelector('.block-date');
export const blockTime = document.querySelector('.block-time');
export const blockGreeting = document.querySelector('.block-greeting');
export const blockQuotes = document.querySelector('.block-quotes');
export const blockTodo = document.querySelector('.block-todo');
export const blockLinks = document.querySelector('.block-links');
export const blockLanguage = document.querySelector('.block-language');
export const blocksOptions = document.querySelectorAll('.setting__chceckbox');

export const blockSettingsImages = document.querySelector('.settings__block-images');
export const blockGithub = document.querySelector('.block-github');
export const blockUnsplash = document.querySelector('.block-unsplash');
export const blockFlickr = document.querySelector('.block-flickr');
export const blocksImages = document.querySelectorAll('.images__chceckbox');
export const settingsBlocksTitle = document.querySelector('.settings-block-title');
export const imageServicesTitle = document.querySelector('.images-block-title');

export const blockSettingsTags = document.querySelector('.settings__block-tags');
export const tagNew = document.querySelector('.tag-new');
export const tagIceland = document.querySelector('.tag-iceland');
export const tagWater = document.querySelector('.tag-water');
export const tagSummer = document.querySelector('.tag-summer');
export const tagBw = document.querySelector('.tag-bw');
export const tagNature = document.querySelector('.tag-nature');
export const blocksTags = document.querySelectorAll('.tags__chceckbox');
export const tagsBlockTitle = document.querySelector('.tags-block-title');

export const elements = {
    audio: audioElement,
    weather: weatherElement,
    date: dateElement,
    time: timeElement,
    greeting: greetingElement,
    quotes: quotesElement,
    todo: todoElement,
    links: linksElement
};
