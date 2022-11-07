import * as storage from '../storage';
import { createTask } from './taskUI';

let projectList, addBtn;

export function initialize() {
    createProjectList();
    createAddBtn();
}

export function loadContent() {
    document.querySelector('#content').textContent = '';
}

function createProjectList() {
    let newProjectList = document.createElement('div');
    newProjectList.classList.add('project-list');
    projectList = newProjectList;
}

function createAddBtn() {
    let newAddBtn = document.createElement('button');
    newAddBtn.id = 'add-btn';
    newAddBtn.textContent = '+';
    newAddBtn.addEventListener('click', () => {
        let newProject = storage.createProject();
        projectList.appendChild(createProject(newProject));
    });
}

function createProject(sample) {
    let container = document.createElement('div');
    container.classList.add('project');
    container.innerHTML =
        "<div class='basic-info'>" +
            "<input type='text' class='title'>" +
            "<input type='checkbox' class='expand'>" +
            "<button class='remove'>" +
        "</div>" +
        "<div class='details'>" +
            "<textarea class='description'></textarea>" +
            "<h3>Tasks</h3>" +
            "<div class='task-list'>" +
            "<button class='task-add-btn'>+</button>" +
        "</div>";
    
    let taskList = container.querySelector('.task-list');
    let addBtn = container.querySelector('.task-add-btn');
    addBtn.addEventListener('click', () => {
        let newTask = sample.createTask();
        taskList.appendChild(createTask(newTask));
        storage.saveProjects();
        // left off here
    });

    return container;
}