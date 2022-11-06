import task from "../task";

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

}