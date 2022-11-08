import * as storage from "../storage";
import { 
    format, 
    isThisWeek, 
    isThisYear, 
    isThisMonth, 
    isToday, 
    parseISO 
} from 'date-fns';

let times, taskList, addBtn;

export function initialize() {
    createTimes();
    createTaskList();
    createAddBtn();
}

export function loadContent() {
    let content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(times);
    content.appendChild(taskList);
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
        taskList.appendChild(addBtn);
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
    let filteredTasks = tasks;
    projects.forEach(p => {
        filteredTasks = filteredTasks.concat(p.getTasks());
    });

    taskList.textContent = '';

    switch(time) {
        case 'day':
            filteredTasks = filteredTasks.filter(e => isToday(e.due));
            break;
        case 'week':
            filteredTasks = filteredTasks.filter(e => isThisWeek(e.due));
            break;
        case 'month':
            filteredTasks = filteredTasks.filter(e => isThisMonth(e.due));
            break;
        case 'year':
            filteredTasks = filteredTasks.filter(e => isThisYear(e.due));
            break;
    }

    filteredTasks.sort((a, b) => a.due - b.due);
    filteredTasks.forEach(sample => taskList.appendChild(createTask(sample)));
    taskList.appendChild(addBtn);
}

export function createTask(sample) {
    let container = document.createElement('div');
    container.classList.add('task');
    container.innerHTML =
        "<div class='basic'>" +
            "<div class='info'>" +
                "<input type='text' class='title'>" +
                "<div>" +
                "Due: " + 
                "<input type='date' class='due'>" +
                "</div>" +
            "</div>" +
            "<div class='actions'>" +
                "<input type='checkbox' class='expand'>" +
                "<input type='checkbox' class='finished'>" +
            "</div>" + 
            "<button class='remove'>✖</button>" +
        "</div>" +
        "<div class='details'>" +
            "<div class='priorities'>" +
                "<button class='priority p1'>1</button>" + 
                "<button class='priority p2'>2</button>" + 
                "<button class='priority p3'>3</button>" + 
                "<button class='priority p4'>4</button>" + 
                "<button class='priority p5'>5</button>" + 
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
        if(e.target.checked) container.classList.add('expanded')
        else container.classList.remove('expanded');
    });

    let finished = container.querySelector('.finished');
    finished.checked = sample.finished;
    finished.addEventListener('change', (e) => {
        if(e.target.checked) {
            sample.finished = true;
            container.classList.add('done');
        }
        else {
            sample.finished = false;
            container.classList.remove('done');
        }
        storage.saveTasks();
        storage.saveProjects();
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