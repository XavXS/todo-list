import * as storage from '../storage';

let addBtn, noteList;

export function initialize() {
    createAddBtn();
    createNoteList();
}

export function loadContent() {
    let content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(noteList);
    reloadNotes();
}

function createAddBtn() {
    let newAddBtn = document.createElement('button');
    newAddBtn.id = 'add-btn';
    newAddBtn.textContent = '+';
    newAddBtn.addEventListener('click', () => {
        let newNote = storage.createNote();
        noteList.appendChild(createNote(newNote));
        noteList.appendChild(newAddBtn);
    });
    addBtn = newAddBtn;
}

function createNoteList() {
    let newNoteList = document.createElement('div');
    newNoteList.id = 'note-list';
    noteList = newNoteList;
}

function reloadNotes() {
    let notes = storage.getNotes();
    noteList.textContent = '';
    notes.forEach(n => {
        noteList.appendChild(createNote(n));
    });
    noteList.appendChild(addBtn);
}

function createNote(sample) {
    let container = document.createElement('div');
    container.classList.add('note');
    container.innerHTML =
        "<div class='basic'>" +
            "<input type='text' class='title'>" +
            "<label class='color-label'>" +
                "<input type='color' class='color'>" +
            "</label>" +
        "</div>" +
        "<button class='remove'>✖</button>" +
        "<textarea class='description'></textarea>";

    let title = container.querySelector('.title');
    title.value = sample.title;
    title.addEventListener('change', (e) => {
        sample.title = e.target.value;
        storage.saveNotes();
    });

    let removeBtn = container.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
        container.remove();
        storage.removeNote(sample);
    });

    let description = container.querySelector('.description');
    description.value = sample.desc;
    description.addEventListener('change', (e) => {
        sample.desc = e.target.value;
        storage.saveNotes();
    });

    let color = container.querySelector('.color');
    color.value = sample.color;
    container.style.backgroundColor = sample.color;
    description.style.backgroundColor = sample.color;
    color.addEventListener('change', (e) => {
        sample.color = e.target.value;
        container.style.backgroundColor = e.target.value;
        description.style.backgroundColor = e.target.value;
        storage.saveNotes();
    });

    return container;
}