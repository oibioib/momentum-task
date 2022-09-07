const langRu = {
    city: 'Минск',
    night: 'Доброй ночи',
    morning: 'Доброе утро',
    afternoon: 'Добрый день',
    evening: 'Добрый вечер',
    placeholder: '[Введите имя]',
    add: 'Добавить',
    todoPlaceholder: 'Новая задача',
    clear: 'Очистить список'
};

const blocksLangRu = {
    settings: 'Настройки',
    audio: 'Аудио',
    weather: 'Погода',
    date: 'Дата',
    time: 'Время',
    greeting: 'Приветствие',
    quotes: 'Цитаты',
    todo: 'ТуДу',
    links: 'Ссылки',
    github: 'GitHub',
    flickr: 'Flickr',
    unsplash: 'Unsplash',
    servicesBlock: 'Сервисы изображений',
    imageBlock: 'Блоки',
    tagsBlock: 'Тэги'
};

const imageTagsRu = {
    new: 'Новое',
    iceland: 'Острова',
    water: 'Вода',
    summer: 'Лето',
    bw: 'Ч/Б',
    nature: 'Природа'
};

const weatheLangRu = {
    temp: '{{temp}}°C',
    wind: 'Скорость ветра: {{wind}} м/с',
    humidity: 'Влажность: {{humidity}}%',
    'weather error': 'Ошибка. Город не найден.'
};

const ru = Object.assign(langRu, blocksLangRu, weatheLangRu, imageTagsRu);

export default ru;
