const langEn = {
    city: 'Minsk',
    night: 'Good night',
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening',
    placeholder: '[Enter name]',
    add: 'Add',
    todoPlaceholder: 'New todo',
    clear: 'Delete all tasks'
};

const blocksLangEn = {
    settings: 'Settings',
    audio: 'Audio',
    weather: 'Weather',
    date: 'Date',
    time: 'Time',
    greeting: 'Greeting',
    quotes: 'Quotes',
    todo: 'ToDo',
    links: 'Links',
    github: 'GitHub',
    flickr: 'Flickr',
    unsplash: 'Unsplash',
    servicesBlock: 'Image services',
    imageBlock: 'Blocks',
    tagsBlock: 'Tags'
};

const imageTagsEn = {
    new: 'New',
    iceland: 'Iceland',
    water: 'Water',
    summer: 'Summer',
    bw: 'B/W',
    nature: 'Nature'
};

const weatheLangEn = {
    temp: '{{temp}}°C',
    wind: 'Wind speed: {{wind}} m/s',
    humidity: 'Humidity: {{humidity}}%',
    'weather error': 'Error. City not found.'
};

const en = Object.assign(langEn, blocksLangEn, weatheLangEn, imageTagsEn);

export default en;
