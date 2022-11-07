import task from "../task";
import * as storage from "../storage";
import { compareAsc, isToday } from 'date-fns';

let times, taskList, addBtn;

export function initialize() {
    createTimes();
    createTaskList();
    createAddBtn();
}

export function loadContent() {
    let content = document.querySelector('#content');
    content.appendChild(times);
    content.appendChild(taskList);
    content.appendChild(addBtn);
    setActiveTime(document.querySelector('#day'));
}

function createTaskList() {
    let newTaskList = document.createElement('div');
    newTaskList.id = 'task-list';
    taskList = newTaskList;
}

function createAddBtn() {
    let newAddBtn = document.createElement('button');
    newAddBtn.id = 'add-btn';
    newAddBtn.textContent = '+';
    newAddBtn.addEventListener('click', () => {
        let newTask = storage.createTask();
        taskList.appendChild(createTask(newTask));
    });
    addBtn = newAddBtn;
}

function createTimes() {
    let newTimes = document.createElement('div');

    newTimes.id = 'times';

    newTimes.innerHTML = 
        "<button id='day' class='time'>Day</button>" +
        "<button id='week' class='time'>Week</button>" +
        "<button id='month' class='time'>Month</button>" +
        "<button id='year' class='time'>Year</button>" +
        "<button id='all' class='time'>All</button>";

    newTimes.querySelector('#day')
        .addEventListener('click', e => setActiveTime(e.target));

    newTimes.querySelector('#week')
        .addEventListener('click', e => setActiveTime(e.target));

    newTimes.querySelector('#month')
        .addEventListener('click', e => setActiveTime(e.target));

    newTimes.querySelector('#year')
        .addEventListener('click', e => setActiveTime(e.target));

    newTimes.querySelector('#all')
        .addEventListener('click', e => setActiveTime(e.target));

    times = newTimes;
}

function setActiveTime(element) {
    let times = document.querySelectorAll('.time');
    times.forEach(e => e.classList.remove('active'));
    element.classList.add('active');
    reloadTasks(element.id);
}

function reloadTasks(time) {
    let tasks = storage.getTasks();
    let projects = storage.getProjects();

    taskList.textContent = '';

    switch(time) {
        case 'day':
            let dayTasks =
                    tasks
                        .filter(e => {
                            return isToday(e.due);
                        })
                        .sort((a, b) => {
                            return b.due - a.due;
                        });
            dayTasks.forEach(sample => {
                taskList.appendChild(createTask(sample));
            });
            break;
        case 'week':
            break;
        case 'month':
            break;
        case 'year':
            break;
        case 'all':
            break;
        default:
            throw 'could not find' + time + '!';
    }
}

function createTask(sample) {
    let container = document.createElement('div');
    container.innerHTML =
        "<div class='basic'>" +
            "<div class='info'>" +
                "<input type='text'>" +
                "<input type='date'>" +
            "</div>" +
            "<div class='actions'>" +
                "<input type='checkbox' class='expand'>" +
                "<button class='delete'>✖</button>" +
            "</div>" + 
        "</div>" +
        "<div class='details>" +
            "<div class='priorities'>" +
                "<button class='priority'>1</button>" + 
                "<button class='priority'>2</button>" + 
                "<button class='priority'>3</button>" + 
                "<button class='priority'>4</button>" + 
                "<button class='priority'>5</button>" + 
            "</div>" +
            "<textarea class='description'></textarea>" +
        "</div>"

    let expand = container.querySelector('.expand');
    expand.addEventListener('change', (e) => {
        if(e.target.checked) console.log('expand checked');
        else console.log('expand unchecked');
    });

    let deleteTask = container.querySelector('.delete');
    deleteTask.addEventListener('click', (e) => {
        container.remove();
        storage.removeTask(sample);
    });

    let details = container.querySelector('.details');

    return container;
}