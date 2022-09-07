import { getAudio, setAudio } from '../services/localstorage';
import tracks from '../services/audio-tracks';
import {
    audioBtnNext,
    audioBtnPlay,
    audioBtnPrev,
    audioPlogress,
    audioTimeCurrent,
    audioTimeFull,
    audioTimeline,
    audioVolume,
    audioVolumeIco,
    audioVolumeLevel,
    playList,
    audioCurrentTrack
} from '../services/selectors';

let isPlay = false;
let currentAudio = getAudio() || 0;
let currentTimeline = 0;
let currentVolume = 0.7;
let isVolumeMuted = false;
const audio = new Audio(tracks[currentAudio].src);

const playListLength = tracks.length - 1;

const calcAudioNum = (n) => {
    let num = n;
    if (n > playListLength) num = 0;
    if (n < 0) num = playListLength;
    return num;
};

const saveCurrentTrack = (n) => {
    currentAudio = n;
    setAudio(n);
};

const audioPlay = (n) => {
    audio.src = tracks[n].src;
    audio.currentTime = currentTimeline;

    if (!isPlay) {
        audio.play();
        isPlay = true;
    }
    audioBtnPlay.classList.add('player__button_pause');
};

const audioPause = () => {
    if (isPlay) {
        audio.pause();
        isPlay = false;
    }
    audioBtnPlay.classList.remove('player__button_pause');
};

const createPlayListItem = ({ title }, index) => {
    const li = document.createElement('li');
    li.classList.add('play-list__item');
    li.setAttribute('data-track', index);
    if (index === currentAudio) {
        li.classList.add('play-list__item_active');
        if (isPlay) {
            li.classList.add('play-list__item_play');
        }
    }
    li.textContent = title;
    return li;
};

const createPlayList = () => {
    const childs = [];
    tracks.forEach((item, index) => {
        const child = createPlayListItem(item, index);
        childs.push(child);
    });
    return childs;
};

const initPlayList = () => {
    createPlayList()
        .forEach((child) => {
            playList.append(child);
        });
};

const changeActiveTrack = () => {
    playList.replaceChildren(...createPlayList());
};

const playPrevNextTrack = (isNext = true) => {
    const direction = (isNext ? 1 : -1);
    audioPause(currentAudio);
    const track = calcAudioNum(currentAudio + direction);
    saveCurrentTrack(track);
    audioPlay(track);
    changeActiveTrack();
};

const playTrack = (n) => {
    const track = calcAudioNum(n);
    // if (n !== currentAudio) {
    audioPause(currentAudio);
    saveCurrentTrack(track);
    audioPlay(track);
    changeActiveTrack();
    // }
};

const convertTime = (num) => {
    let seconds = parseInt(num, 10);
    let minutes = parseInt(seconds / 60, 10);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60, 10);
    minutes -= hours * 60;
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
};

audio.addEventListener('loadeddata', () => {
    audioTimeFull.textContent = convertTime(audio.duration);
    audio.volume = currentVolume;
});

audioTimeline.addEventListener('click', (e) => {
    const { width } = window.getComputedStyle(e.currentTarget);
    const time = (e.offsetX / parseInt(width, 10)) * audio.duration;
    audio.currentTime = time;
    if (!isPlay) {
        currentTimeline = time;
        playTrack(currentAudio);
        currentTimeline = 0;
    }
});

audioVolume.addEventListener('click', (e) => {
    const { width } = window.getComputedStyle(e.currentTarget);
    const level = (e.offsetX / parseInt(width, 10));
    audio.volume = level;
    currentVolume = audio.volume;
});

audioVolumeIco.addEventListener('click', (e) => {
    e.target.classList.toggle('muted');
    if (!isVolumeMuted) {
        audio.volume = 0;
        isVolumeMuted = true;
    } else {
        audio.volume = currentVolume;
        isVolumeMuted = false;
    }
});

audioBtnPlay.addEventListener('click', () => {
    if (isPlay) {
        audioPause(currentAudio);
        currentTimeline = audio.currentTime;
    } else {
        playTrack(currentAudio);
        currentTimeline = 0;
    }
    changeActiveTrack();
});

audioBtnPrev.addEventListener('click', () => playPrevNextTrack(false));
audioBtnNext.addEventListener('click', playPrevNextTrack);
audio.addEventListener('ended', playPrevNextTrack);

playList.addEventListener('click', (e) => {
    const dataTrack = e.target.getAttribute('data-track');
    if (dataTrack) {
        const track = +dataTrack;

        if (isPlay && track === currentAudio) {
            audioPause(track);
            currentTimeline = audio.currentTime;
        } else {
            playTrack(track);
            currentTimeline = 0;
        }
    }
    changeActiveTrack();
});

export const updateAudioTime = () => {
    audioPlogress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    audioTimeCurrent.textContent = convertTime(audio.currentTime);
};

export const updateCurrentTrack = () => {
    audioCurrentTrack.textContent = tracks[currentAudio].title;
};

export const updateCurrentVolume = () => {
    audioVolumeLevel.style.width = `${currentVolume * 100}%`;
};

export default initPlayList;
