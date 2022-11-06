import task from './task';
export default class project {
    
    #tasks;

    constructor(title, desc) {
        this._title = title;
        this._desc = desc;
        this.#tasks = [];
    }

    get title() { return this._title; }
    set title(newTitle) { this._name = newTitle; }

    get desc() { return this._desc; }
    set desc(newDesc) { this._desc = newDesc; }

    addTask(task) {
        if(task) {
            this.#tasks.push(task);
            return;
        }
        this.#tasks.push(
            new task(
                'New Task',
                'Enter Description',
                new Date(),
                1
            )
        );
    }
};