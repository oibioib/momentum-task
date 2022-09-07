import { todoClearAll, todoCompleted, todoForm, todoList, todoNum, todoSummary } from '../services/selectors';
import { getTodoList, setTodoList } from '../services/localstorage';

const todos = {};

const clearTodosObj = () => {
    if (todos) Object.getOwnPropertyNames(todos).forEach((p) => { delete todos[p]; });
};

const createTodoItem = (text, num, isComplete) => {
    const todo = document.createElement('div');
    todo.classList.add('todo__item');
    todo.setAttribute('data-todo', num);
    const complete = isComplete ? 'checked' : '';
    const todoPart1 = `<input class="todo__complete" type="checkbox" name="todoitem${num}" id="todoitem${num}" ${complete}>`;
    const todoPart2 = `<p class="todo__text">${text}</p>`;
    const todoPart3 = '<button class="todo__clear"></button>';
    todo.innerHTML = `${todoPart1}${todoPart2}${todoPart3}`;
    return todo;
};

export const createTodoList = (obj = todos) => {
    const childs = [];
    const todosCopy = JSON.parse(JSON.stringify(obj));
    clearTodosObj();
    Object.entries(todosCopy)
        .forEach((todo, index) => {
            // eslint-disable-next-line no-unused-vars
            const [_, { text, isComplete }] = todo;
            const todoItem = createTodoItem(text, index + 1, isComplete);
            childs.push(todoItem);
            todos[index + 1] = {
                text,
                isComplete
            };
        });
    return childs;
};

const updateTodoCountOnBtn = (num) => {
    todoNum.querySelector('span').textContent = num;
};

export const countAllTodos = () => Object.keys(todos).length;

export const countCompleteTodos = () => {
    let completed = 0;
    if (Object.keys(todos).length > 0) {
        Object.values(todos)
            .forEach((element) => {
                completed += (element.isComplete ? 1 : 0);
            });
    }
    return completed;
};

// export const countCompletedAndAll = () => `${countCompleteTodos()}/${countAllTodos()}`;

export const completedAndAll = () => {
    todoCompleted.innerHTML = `${countCompleteTodos()}/${countAllTodos()}`;
    if (!countAllTodos()) {
        todoSummary.classList.add('hide');
    } else {
        todoSummary.classList.remove('hide');
    }
};

export const loadTodoList = () => {
    const todosFromLocalstorage = getTodoList();
    if (todosFromLocalstorage) {
        clearTodosObj();
        todoList.replaceChildren(...createTodoList(todosFromLocalstorage));
        updateTodoCountOnBtn(Object.keys(todos)
            .length);
        completedAndAll();
    }
};

export const saveTodoList = () => {
    setTodoList(todos);
    updateTodoCountOnBtn(Object.keys(todos)
        .length);
};

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = e.currentTarget.todoinput;
    const todoListCount = todoList.querySelectorAll('.todo__item')
        .length;
    const nextTodo = todoListCount + 1;

    todos[nextTodo] = {
        text: value,
        isComplete: false
    };
    const item = createTodoItem(value, nextTodo, false);
    todoList.appendChild(item);
    todoForm.reset();
    saveTodoList();
    completedAndAll();
});

todoList.addEventListener('click', (e) => {
    const { target } = e;
    const n = target.parentNode.getAttribute('data-todo');

    if (target.classList.contains('todo__clear')) {
        delete todos[n];
        todoList.replaceChildren(...createTodoList());
        saveTodoList();
        completedAndAll();
    }

    if (target.classList.contains('todo__complete')) {
        todos[n].isComplete = target.checked || false;
        saveTodoList();
        completedAndAll();
    }
});

todoClearAll.addEventListener('click', (e) => {
    e.preventDefault();
    clearTodosObj();
    updateTodoCountOnBtn(Object.keys(todos)
        .length);
    todoList.replaceChildren(...createTodoList());
    saveTodoList();
    completedAndAll();
});
