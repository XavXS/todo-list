import project from './project';
import task from './task';
import note from './note';
import parseISO from 'date-fns/parseISO'

let projects = [];
let tasks = [];
let notes = [];

export function retrieveData() {
    //localStorage.setItem('tasks', null);
    retrieveProjects();
    retrieveTasks();
    retrieveNotes();
}

function retrieveProjects() {
    let projectsData = JSON.parse(localStorage.getItem('projects'));
    if(!projectsData) return;
    projectsData.forEach(p => {
        let newProject = new project(p._title, p._desc);
        p._tasks.forEach(t => {
            newProject.getTasks().push(
                new task(
                    t._title,
                    t._desc,
                    parseISO(t._due),
                    t._prio,
                    t._finished
                )
            );
        });
        projects.push(newProject);
    });
}

function retrieveTasks() {
    let tasksData = JSON.parse(localStorage.getItem('tasks'));
    if(!tasksData) return;
    tasksData.forEach(t => {
        tasks.push(
            new task(
                t._title,
                t._desc,
                parseISO(t._due),
                t._prio,
                t._finished
            )
        )
    });
}

function retrieveNotes() {
    let notesData = JSON.parse(localStorage.getItem('notes'));
    if(!notesData) return;
    notesData.forEach(n => {
        notes.push(
            new note(
                n._title,
                n._desc,
                n._color
            )
        );
    });
}

export function createProject() {
    let newProject = 
        new project(
            'New Project', 
            'Enter Description'
        );
    projects.push(newProject);
    saveProjects();
    return newProject;
}

export function createTask() {
    let newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    let newTask = 
        new task(
            'New Task',
            'Enter Description',
            newDate,
            1,
            false
        );
    tasks.push(newTask);
    saveTasks();
    return newTask;
}

export function createNote() {
    let newNote = 
        new note(
            'New Note',
            'Enter Details',
            '#FFFFFF'
        );
    notes.push(newNote);
    saveNotes();
    return newNote;
}

export function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

export function getTasks() { return tasks; }

export function getProjects() { return projects; }

export function getNotes() { return notes; }

export function removeTask(targetTask) {
    const index = tasks.indexOf(targetTask);
    if(index > -1) {
        tasks.splice(index, 1);
        saveTasks();
        return;
    }

    for(let i=0; i<projects.length; ++i) {
        let pTasks = projects[i].getTasks();
        let taskIndex = pTasks.indexOf(targetTask);
        if(taskIndex > -1) {
            pTasks.splice(taskIndex, 1);
            saveProjects();
            return;
        }
    }
}

export function removeProject(targetProject) {
    const index = projects.indexOf(targetProject);
    if(index > -1) projects.splice(index, 1);
    saveProjects();
}

export function removeNote(targetNote) {
    const index = notes.indexOf(targetNote);
    if(index > -1) notes.splice(index, 1);
    saveNotes();
}