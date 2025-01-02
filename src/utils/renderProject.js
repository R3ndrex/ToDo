import mediator from "./mediator";
import exitButton from "../images/close-box-outline.svg";

class RenderProject {
    constructor(parent, project) {
        this.parent = parent;
        this.project = project;
        this.todos = project.elements;
        this.projectDOM = document.createElement("div");
        this.sortByPriority(this.todos);
        mediator.subscribe("createdTodo", (project) => {
            if (this.project === project) {
                this.sortByPriority(this.todos);
                this.render();
            }
        });
    }

    saveLocalTodos(index) {
        const propertyValues = this.project.elements.map((todo) => {
            return Object.values(todo);
        });
        localStorage.setItem(
            `todoItems${index}`,
            JSON.stringify(propertyValues)
        );
    }

    setIndex(index) {
        this.projectDOM.dataset.index = index;
    }
    append() {
        this.parent.appendChild(this.projectDOM);
    }
    render() {
        this.saveLocalTodos(this.projectDOM.dataset.index);
        this.projectDOM.innerHTML = "";
        this.projectDOM.classList.add("project");
        const title = document.createElement("h2");
        title.textContent += this.project.name;
        this.projectDOM.appendChild(title);
        for (let i = 0; i < this.todos.length; i++) {
            this.renderTodoElement(i);
        }

        this.renderAddButton(this.projectDOM);
    }
    sortByPriority(todos) {
        todos.sort((a, b) => a.priority - b.priority);
    }
    renderAddButton(parent) {
        const button = document.createElement("button");
        button.classList.add("open-todo-button");
        button.textContent = "Add To-Do";
        parent.appendChild(button);
        button.addEventListener("click", () => {
            mediator.emit("openTodoForm", this.project);
        });
    }
    toggleDescription(title) {
        title.addEventListener("click", () => {
            if (title.classList.contains("active")) {
                title.classList.remove("active");
            } else {
                title.classList.add("active");
            }
        });
    }

    renderDeleteButton(index) {
        const button = document.createElement("img");
        button.src = exitButton;
        button.addEventListener("click", () => {
            this.todos.splice(index, 1);
            mediator.emit("renderProjectContainer");
        });
        return button;
    }
    renderTodoElement(i) {
        const todo = document.createElement("div"); // todo = div, this.todos=array
        this.projectDOM.appendChild(todo);
        todo.classList.add("todo");
        const title = document.createElement("h3");
        title.textContent = `${this.todos[i].title}`;
        const dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        dueDate.textContent = `${this.todos[i].dueDate}`;
        title.appendChild(dueDate);
        this.toggleDescription(title);
        title.appendChild(this.renderDeleteButton(i));
        todo.appendChild(title);
        const description = document.createElement("div");
        description.textContent = `${this.todos[i].description}`;
        this.descriptionChange(description, i);
        todo.appendChild(description);
    }
    descriptionChange(description, i) {
        description.addEventListener("mouseenter", () => {
            const input = document.createElement("input");
            input.value = description.textContent;
            description.textContent = "";
            input.addEventListener("change", () => {
                this.todos[i].description = input.value;
                this.saveLocalTodos(this.projectDOM.dataset.index);
            });
            description.appendChild(input);
        });
        description.addEventListener("mouseleave", () => {
            description.innerHTML = "";
            description.textContent = this.todos[i].description;
        });
    }
}

export default RenderProject;
