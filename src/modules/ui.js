function createTabs() {
    let tabs = document.querySelector('#tabs');

    let tasks = document.createElement('button');
    tasks.textContent = 'Tasks';
    tasks.classList.add('tab');
    tasks.addEventListener('click', e => {
        setActiveTab(e.target);
    });

    let projects = document.createElement('button');
    projects.textContent = 'Projects';
    projects.classList.add('tab');
    projects.addEventListener('click', e => {
        setActiveTab(e.target);
    });

    let notes = document.createElement('button');
    notes.textContent = 'Notes';
    notes.classList.add('tab');
    notes.addEventListener('click', e => {
        setActiveTab(e.target);
    });

    tabs.appendChild(tasks);
    tabs.appendChild(projects);
    tabs.appendChild(notes);
}

function setActiveTab(element) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(e => {e.classList.remove('active');});
    element.classList.add('active');
}

export default function initializeUI() {
    createTabs();
    setActiveTab(document.querySelector('.tab'));
}