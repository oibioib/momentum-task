import { quoteAuthor, quotesChangeBtn, quoteText } from '../services/selectors';
import { getLang } from '../services/localstorage';
import { getRandomNum } from './slider';

const linkQuotes = 'https://raw.githubusercontent.com/oibioib/momentum-task-data/main/quotes/';

const prepareLink = (url) => `${url}${getLang().toLowerCase()}.json`;

const loadQuotes = async (link) => {
    const res = await fetch(link);
    const data = await res.json();
    return data;
};

const updateQuote = async (link) => {
    try {
        const quotes = await loadQuotes(link);
        const random = getRandomNum(0, quotes.length - 1);
        const { text, author } = quotes[random];
        quoteText.textContent = text;
        quoteAuthor.textContent = author;
    } catch (err) {
        if (getLang() === 'ru') {
            quoteText.textContent = 'Что-то не так. Попробуйте позже.';
            quoteAuthor.textContent = 'Билл Гейтс';
        } else {
            quoteText.textContent = 'Something wrong. Try later.';
            quoteAuthor.textContent = 'Bill Gates';
        }
    }
};

const updateQuoteHandler = () => {
    updateQuote(prepareLink(linkQuotes));
};

export default updateQuoteHandler;

quotesChangeBtn.addEventListener('click', updateQuoteHandler);
