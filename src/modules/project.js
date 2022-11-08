import task from './task';
export default class project {
    
    _tasks = [];

    constructor(title, desc) {
        this._title = title;
        this._desc = desc;
        this._tasks = [];
    }

    get title() { return this._title; }
    set title(newTitle) { this._name = newTitle; }

    get desc() { return this._desc; }
    set desc(newDesc) { this._desc = newDesc; }

    createTask() {
        let newTask = 
            new task(
                'New Task',
                'Enter Description',
                new Date(),
                1
            );
        this._tasks.push(newTask);
        return newTask;
    }

    getTasks() {
        return this._tasks;
    }
};