console.message = (message, color = 'black', weight = 'normal') => {
    console.log('%c ' + message, `color: ${color}; font-weight: ${weight}`)
};

console.message('Хорошего дня!', 'orange', 'bold');

let msg = '';
msg += 'Требования к заданию выполнены полностью. Score: 160/160.' + '\n';

console.log(msg);
