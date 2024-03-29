export default class note {
    constructor(title, desc, color) {
        this._title = title;
        this._desc = desc;
        this._color = color;
    }

    static defaultColor = '#d6d68d';

    get title() { return this._title; }
    set title(newTitle) { this._title = newTitle; }

    get desc() { return this._desc; };
    set desc(newDesc) { this._desc = newDesc; };

    get color() { return this._color; };
    set color(newColor) { this._color = newColor; };
}