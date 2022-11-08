import * as taskUI from './taskUI';
import * as projectUI from './projectUI';
import * as noteUI from './noteUI';

function initializeTabs() {
    document.querySelector('#tasks-tab')
        .addEventListener('click', e => {
            setActiveTab(e.target);
            taskUI.loadContent();
        });
    document.querySelector('#projects-tab')
        .addEventListener('click', e => {
            setActiveTab(e.target);
            projectUI.loadContent();
        });
    document.querySelector('#notes-tab')
        .addEventListener('click', e => {
            setActiveTab(e.target);
            noteUI.loadContent();
        });
}

function setActiveTab(element) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(e => {e.classList.remove('active');});
    element.classList.add('active');
}

export default function initializeUI() {
    initializeTabs();
    setActiveTab(document.querySelector('#tasks-tab'));
    taskUI.initialize();
    projectUI.initialize();
    taskUI.loadContent();
}