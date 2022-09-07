import { blockOnOff, blockSettingsImages, blockSettingsTags, blocksImages, blocksOptions, blocksTags, elements, } from '../services/selectors';
import { getBlocsState, getImageServicesState, getTagsState, setBlocsState, setImageServicesState, setNeedBgReload, setTagsState } from '../services/localstorage';

let currentBlocksState = {};
let currentImageServicesState = {};
let currentTagsState = {};
const hideCssClass = 'module_hide';

export const updateBlocsCurrentState = () => {
    currentBlocksState = getBlocsState();
    blocksOptions.forEach((elem) => {
        const option = elem.getAttribute('data-option');
        elem.checked = currentBlocksState[option];
    });
};

export const updateImageServicesCurrentState = () => {
    currentImageServicesState = getImageServicesState();
    blocksImages.forEach((elem) => {
        const option = elem.getAttribute('data-option');
        elem.checked = currentImageServicesState[option];
    });
};

export const updateTagsState = () => {
    currentTagsState = getTagsState();
    blocksTags.forEach((elem) => {
        const option = elem.getAttribute('data-option');
        elem.checked = currentTagsState[option];
    });
};

export const updateBlocsCurrentOpacity = () => {
    Object.entries(elements).forEach(([element, selector]) => {
        if (!currentBlocksState[element]) {
            selector.classList.add(hideCssClass);
        } else {
            selector.classList.remove(hideCssClass);
        }
    });
};

const changeBlockOpacity = (block) => {
    block.classList.toggle(hideCssClass);
};

const isSomeServicesStateTrue = (states) => Object.values(states).some((state) => state === true);

const formatStates = (states, defaultState) => {
    const copyState = { ...states };
    if (isSomeServicesStateTrue(states)) return copyState;
    copyState[defaultState] = true;
    return copyState;
};

blockOnOff.addEventListener('change', (e) => {
    const dataOption = e.target.getAttribute('data-option');
    if (dataOption) {
        currentBlocksState[dataOption] = e.target.checked;
        setBlocsState(currentBlocksState);
        changeBlockOpacity(elements[dataOption]);
    }
});

blockSettingsImages.addEventListener('change', (e) => {
    const dataOption = e.target.getAttribute('data-option');
    if (dataOption) {
        currentImageServicesState[dataOption] = e.target.checked;
        setImageServicesState(formatStates(currentImageServicesState, 'github'));
        setNeedBgReload(true);
        updateImageServicesCurrentState();
    }
});

blockSettingsTags.addEventListener('change', (e) => {
    const dataOption = e.target.getAttribute('data-option');
    if (dataOption) {
        currentTagsState[dataOption] = e.target.checked;
        setTagsState(currentTagsState);
        setNeedBgReload(true);
    }
});
