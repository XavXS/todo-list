import project from './project';
import task from './task';
import note from './note';
import parseISO from 'date-fns/parseISO'

let projects = [];
let tasks = [];
let notes = [];

export function retrieveData() {
    if(checkFirstVisit()) {
        generateTutorial();
        return;
    }
    retrieveProjects();
    retrieveTasks();
    retrieveNotes();
}

function checkFirstVisit() {
    if(localStorage.getItem('visited')) return false;
    localStorage.setItem('visited', 1);
    return true;
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
            note.defaultColor
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

function generateTutorial() {
    let p1 = new project(
        'Goal: Learn to edit title and date',
        'Have you finished the tutorial in "Tasks" tab?'
    )

    let p1Task = p1.getTasks();

    p1Task.push(
        new task(
            'Click to edit title!',
            'Click the numbers ↑↑ above ↑↑ to set priority\n\n' +
            '.. You can also click this text to edit description!',
            new Date(),
            1,
            false
        )
    );

    p1Task.push(
        new task(
            '..same for the date    → → →',
            'Click the numbers ↑↑ above ↑↑ to set priority\n\n' +
            '.. You can also click this text to edit description!',
            new Date(),
            2,
            false
        )
    );

    let p2 = new project(
        'Next Mission: Learn to edit details',
        'Have you finished the tutorial in "Tasks" tab?'
    )

    let p2Task = p2.getTasks();

    p2Task.push(
        new task(
            'Try clicking the triangle?',
            'Click the numbers ↑↑ above ↑↑ to set priority\n\n' +
            '.. You can also click this text to edit description!',
            new Date(),
            3,
            false
        )
    );

    let p3 = new project(
        'My final challenge - Mastering tasks',
        'Have you finished the tutorial in "Tasks" tab?'
    )

    let p3Task = p3.getTasks();

    p3Task.push(
        new task(
            'Guess what the circle does!',
            'Click the numbers ↑↑ above ↑↑ to set priority\n\n' +
            '.. You can also click this text to edit description!',
            new Date(),
            4,
            true
        )
    );

    p3Task.push(
        new task(
            'Challenge: delete this task (hint: x)',
            'Click the numbers ↑↑ above ↑↑ to set priority\n\n' +
            '.. You can also click this text to edit description!',
            new Date(),
            5,
            false
        )
    );

    projects.push(p1);
    projects.push(p2);
    projects.push(p3);

    let n1 = new note(
        'Click me to edit title',
        'Have you finished the tutorial in "Tasks" tab?\n\n' +
        'Have you?\n\n' +
        'You have, right?\n.\n.\n.\nlorem ipsum',
        note.defaultColor
    )

    let n2 = new note(
        'Another little tip',
        'You can also change colors!\n\n' +
        'Just click on the palette (top right)',
        '#d58fd6'
    )

    notes.push(n1);
    notes.push(n2);
}