import task from "../task";
import * as storage from "../storage";
import { format, isThisWeek, isThisYear, isThisMonth, isToday, parseISO } from 'date-fns';

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
    let filteredTasks;

    taskList.textContent = '';

    switch(time) {
        case 'day':
            filteredTasks = tasks.filter(e => isToday(e.due));
            break;
        case 'week':
            filteredTasks = tasks.filter(e => isThisWeek(e.due));
            break;
        case 'month':
            filteredTasks = tasks.filter(e => isThisMonth(e.due));
            break;
        case 'year':
            filteredTasks = tasks.filter(e => isThisYear(e.due));
            break;
        case 'all':
            filteredTasks = tasks; //for now
            break;
        default:
            throw 'could not find' + time + '!';
    }

    filteredTasks.sort((a, b) => a.due - b.due);
    filteredTasks.forEach(sample => taskList.appendChild(createTask(sample)));
}

function createTask(sample) {
    let container = document.createElement('div');
    container.innerHTML =
        "<div class='basic'>" +
            "<div class='info'>" +
                "<input type='text' class='title'>" +
                "<input type='date' class='due'>" +
            "</div>" +
            "<div class='actions'>" +
                "<input type='checkbox' class='expand'>" +
                "<button class='remove'>✖</button>" +
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

    let title = container.querySelector('.title');
    title.value = sample.title;
    title.addEventListener('change', (e) => {
        sample.title = e.target.value;
        storage.saveTasks();
        storage.saveProjects();
    });

    let due = container.querySelector('.due');
    due.value = format(sample.due, 'yyyy-MM-dd');
    due.addEventListener('change', (e) => {
        let newDue = parseISO(e.target.value);
        if(isNaN(newDue)) return;
        sample.due = newDue;
        storage.saveTasks();
        storage.saveProjects();
    });

    let expand = container.querySelector('.expand');
    expand.addEventListener('change', (e) => {
        if(e.target.checked) console.log('expand checked');
        else console.log('expand unchecked');
    });

    let removeBtn = container.querySelector('.remove');
    removeBtn.addEventListener('click', (e) => {
        container.remove();
        storage.removeTask(sample);
    });

    let priorities = container.querySelectorAll('.priority');
    priorities.forEach(priority => {
        priority.addEventListener('click', (e) => {
            let prios = container.querySelectorAll('.priority');
            prios.forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            sample.prio = parseInt(e.target.textContent);
            storage.saveTasks();
            storage.saveProjects();
        });
    });
    priorities[sample.prio-1].classList.add('active');

    let description = container.querySelector('.description');
    description.value = sample.desc;
    description.addEventListener('change', (e) => {
        sample.desc = description.value;
        storage.saveTasks();
        storage.saveProjects();
    });

    return container;
}