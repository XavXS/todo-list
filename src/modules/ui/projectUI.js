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
    reloadProjects();
}

function createProjectList() {
    let newProjectList = document.createElement('div');
    newProjectList.id = 'project-list';
    projectList = newProjectList;
}

function createAddBtn() {
    let newAddBtn = document.createElement('button');
    newAddBtn.id = 'add-btn';
    newAddBtn.textContent = '+';
    newAddBtn.addEventListener('click', () => {
        let newProject = storage.createProject();
        projectList.appendChild(createProject(newProject));
        projectList.appendChild(addBtn);
    });
    addBtn = newAddBtn;
}

function reloadProjects() {
    let projects = storage.getProjects();
    projectList.textContent = '';
    projects.forEach(p => {
        projectList.appendChild(createProject(p));
    });
    projectList.appendChild(addBtn);
}

function createProject(sample) {
    let container = document.createElement('div');
    container.classList.add('project');
    container.innerHTML =
        "<div class='basic'>" +
            "<input type='text' class='title'>" +
            "<label class='expand-label'>" +
                "<input type='checkbox' class='expand'>" +
                "<span></span>" +
            "</label>" +
            "<button class='remove'>✖</button>" +
        "</div>" +
        "<div class='details'>" +
            "<textarea class='description'></textarea>" +
            "<h3>Tasks</h3>" +
            "<div class='task-list'>" +
                "<button class='task-add-btn'>+</button>" +
            "</div>" +
        "</div>";

    let title = container.querySelector('.title');
    title.value = sample.title;
    title.addEventListener('change', (e) => {
        sample.title = e.target.value;
        storage.saveProjects();
    });

    let details = container.querySelector('.details');
    details.style.height = 0;
    let expand = container.querySelector('.expand');
    expand.addEventListener('change', (e) => {
        if(e.target.checked) {
            container.classList.add('expanded');
            details.style.height = '1px';
            details.style.height = details.scrollHeight + 'px';
        }
        else {
            container.classList.remove('expanded');
            details.style.height = 0;
        }
    });

    let removeBtn = container.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
        container.remove();

        let tHeight = -8;
        details.childNodes.forEach(c => {
            tHeight += c.offsetHeight+8;
        });
        details.style.height = tHeight + 'px';
        
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
        taskList.appendChild(addBtn);

        let tHeight = -8;
        details.childNodes.forEach(c => {
            tHeight += c.offsetHeight+8;
        });
        details.style.height = tHeight + 'px';

        storage.saveProjects();
    });
    taskList.appendChild(addBtn);

    return container;
}