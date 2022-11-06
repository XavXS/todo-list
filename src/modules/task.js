export default class task {
    constructor(title, desc, due, prio) {
        this._title = title;
        this._desc = desc;
        this._due = due;
        this._prio = prio;
    }

    get title() { return this._title; }
    set title(newTitle) { this._title = newTitle; };

    get desc() { return this._desc; }
    set desc(newDesc) { this._desc = newDesc; }

    get due() { return this._due; }
    set due(newDue) { this._due = newDue; }

    get prio() { return this._prio; }
    set prio(newPrio) { this._prio = newPrio; };
}