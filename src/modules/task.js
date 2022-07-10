export default class task {
    #content;

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.#generateContent();
    }

    #generateContent() {
        const clone = document
                        .querySelector('template#task-template')
                        .content
                        .querySelector('div')
                        .cloneNode(true);
        this.#content = clone;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getContent() {
        return this.#content;
    }
};