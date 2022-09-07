import { prefix } from '../services/localstorage';
import { greetingName } from '../services/selectors';

export const getTimeOfDay = (hour) => {
    const times = [
        'night',
        'morning',
        'afternoon',
        'evening'
    ];
    return times[Math.floor(hour / 6)];
};

export const getName = () => localStorage.getItem(`${prefix}name`);

export const setName = () => {
    if (localStorage.getItem(`${prefix}name`)) {
        greetingName.value = localStorage.getItem(`${prefix}name`);
    }
};

export const saveName = () => {
    localStorage.setItem(`${prefix}name`, greetingName.value);
};

const getCumputedWidthOfTextInInput = (element, placeholder = false) => {
    let text = element.value;
    if (placeholder) {
        text = element.getAttribute('placeholder');
    }
    const elementComputedStyles = window.getComputedStyle(element);
    const elementSize = elementComputedStyles.getPropertyValue('font-size');
    const elementFont = elementComputedStyles.getPropertyValue('font-family');
    const elementPaddingLeft = elementComputedStyles.getPropertyValue('padding-left');
    const elementPaddingRight = elementComputedStyles.getPropertyValue('padding-right');
    const paddingsLeftAndRight = +elementPaddingLeft.slice(0, elementPaddingLeft.length - 2) +
        +elementPaddingRight.slice(0, elementPaddingRight.length - 2);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `${elementSize} ${elementFont}`;
    const { width } = context.measureText(text);
    return `${Math.ceil(width) + paddingsLeftAndRight}px`;
};

const setElementWidth = (element, width) => {
    element.style.width = width;
};

const updateInputSize = (element) => {
    const size = element.value.length;
    if (size) {
        setElementWidth(element, getCumputedWidthOfTextInInput(element));
    } else {
        setElementWidth(element, getCumputedWidthOfTextInInput(element, { placeholder: true }));
    }
};

greetingName.addEventListener('input', () => {
    updateInputSize(greetingName);
});

export const updateGreetingNameWidth = () => {
    updateInputSize(greetingName);
};
