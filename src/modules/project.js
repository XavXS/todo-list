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
};