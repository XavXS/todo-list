import project from './project';
import task from './task';
import note from './note';
import {toDate} from 'date-fns';

let projects = [];
let tasks = [];
let notes = [];

export function retrieveData() {
    retrieveProjects();
    retrieveTasks();
    retrieveNotes();
}

function retrieveProjects() {
    console.log('retrieving projects data...');

    let projectsData = JSON.parse(localStorage.getItem('projects'));
    if(!projectsData) {
        console.log('projects data could not be found');
        return;
    }

    console.log('found projects data:\n' + projectsData);

    projectsData.forEach(p => {

        console.log('found project data:\n' + p);

        let newProject = new project(p.title, p.desc);
        p.tasks.forEach(t => {

            console.log('found task data:\n' + t);

            newProject.addTask(
                new task(
                    t.title,
                    t.desc,
                    toDate(t.due),
                    t.prio
                )
            );
        });

        console.log('assembled project:\n' + newProject);

        projects.push(newProject);
    });
}

function retrieveTasks() {
    let tasksData = JSON.parse(localStorage.getItem('tasks'));
    tasksData.forEach(t => {
        tasks.push(
            t.title,
            t.desc,
            toDate(t.due),
            t.prio
        );
    });
}

function retrieveNotes() {
    let notesData = JSON.parse(localStorage.getItem('notes'));
    notesData.forEach(n => {
        notes.push(
            n.title,
            n.desc,
            n.color
        );
    });
}

export function createProject(newProject) {
    if(newProject) {
        projects.push(newProject);
        return;
    }
    projects.push(
        new project(
            'New Project', 
            'Enter Description'
        )
    );
    saveProjects();
}

export function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function createTask(newTask) {
    if(newTask) {
        tasks.push(newTask);
        return;
    }
    tasks.push(
        new task(
            'New Task',
            'Enter Description',
            new Date(),
            1
        )
    );
    saveTasks();
}

export function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function createNote(newNote) {
    if(newNote) {
        notes.push(newNote);
        return;
    }
    notes.push(
        new note(
            'New Note',
            'Enter Details',
            '#FFFFFF'
        )
    );
    saveNotes();
}

export function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}