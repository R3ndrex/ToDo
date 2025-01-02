class TodoElement {
    constructor(title, description, priority = 0, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
    get properties() {
        return [this.description, this.dueDate];
    }
}

export default TodoElement;
