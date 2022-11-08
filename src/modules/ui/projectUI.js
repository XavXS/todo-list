import * as storage from '../storage';
import { createTask } from './taskUI';

let projectList, addBtn;

export function initialize() {
    createProjectList();
    createAddBtn();
}

export function loadContent() {
    let content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(projectList);
    content.appendChild(addBtn);
    reloadProjects();
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
    addBtn = newAddBtn;
}

function reloadProjects() {
    let projects = storage.getProjects();
    projectList.textContent = '';
    projects.forEach(p => {
        projectList.appendChild(createProject(p));
    });
}

function createProject(sample) {
    let container = document.createElement('div');
    container.classList.add('project');
    container.innerHTML =
        "<div class='basic-info'>" +
            "<input type='text' class='title'>" +
            "<input type='checkbox' class='expand'>" +
            "<button class='remove'>✖</button>" +
        "</div>" +
        "<div class='details'>" +
            "<textarea class='description'></textarea>" +
            "<h3>Tasks</h3>" +
            "<div class='task-list'></div>" +
            "<button class='task-add-btn'>+</button>" +
        "</div>";

    let title = container.querySelector('.title');
    title.value = sample.title;
    title.addEventListener('change', (e) => {
        sample.title = e.target.value;
        storage.saveProjects();
    });

    let removeBtn = container.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
        container.remove();
        storage.removeProject(sample);
    });

    let description = container.querySelector('.description');
    description.value = sample.desc;
    description.addEventListener('change', (e) => {
        sample.desc = e.target.value;
        storage.saveProjects();
    });
    
    let taskList = container.querySelector('.task-list');
    let tasks = sample.getTasks();
    tasks.forEach(t => taskList.appendChild(createTask(t)));

    let addBtn = container.querySelector('.task-add-btn');
    addBtn.addEventListener('click', () => {
        let newTask = sample.createTask();
        taskList.appendChild(createTask(newTask));
        storage.saveProjects();
    });

    return container;
}