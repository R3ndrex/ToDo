import "./style.css";

import Project from "./utils/project.js";
import TodoItem from "./utils/todos.js";
import TodoFormRenderer from "./utils/TodoForm.js";
import RenderProject from "./utils/renderProject.js";
import mediator from "./utils/mediator.js";
import ProjectForm from "./utils/ProjectForm.js";
import ProjectContainer from "./utils/ProjectContainer.js";

const projectContainer = document.querySelector(".projects-container");
const dialogDeleteProject = document.querySelector(".delete-project-dialog");
const deleteProjectButton = document.querySelector(".delete-project-button");
const addProjectButton = document.querySelector(".add-project-button");
const projectContainerInstance = new ProjectContainer(projectContainer);

let projects = [];
try {
    const projectNames = JSON.parse(localStorage.getItem("Projects"));
    projects = projectNames.map((name, index) => {
        const project = new Project(name);
        const todoItems = localStorage.getItem(`todoItems${index}`)
            ? JSON.parse(localStorage.getItem(`todoItems${index}`))
            : [];
        todoItems.forEach((todo) => {
            project.addElement(new TodoItem(...todo));
        });
        return project;
    });
} catch (e) {
    console.error(e);
    projects = [
        new Project(
            "First Project",
            new TodoItem("Title", "Description", 1, "2025-01-01"),
            new TodoItem(
                "Another Title",
                "Another description",
                3,
                "2025-11-11"
            )
        ),
    ];
}
const allProjects = projects.map((project) => {
    return new RenderProject(projectContainer, project);
});

function createTodo(title, priority = 0, description, dueDate) {
    return new TodoItem(title, description, priority, dueDate);
}

function createProject(name) {
    return new RenderProject(projectContainer, new Project(name));
}

const todoFormRenderer = new TodoFormRenderer(
    document.querySelector(".todo-dialog"),
    document.querySelector(".todo-dialog form"),
    createTodo
);

const projectForm = new ProjectForm(
    document.querySelector(".project-dialog"),
    document.querySelector(".project-dialog form"),
    createProject
);

projectForm.setupSubmitButton(document.querySelector(".project-dialog button"));
addCloseButton(
    projectForm,
    document.querySelector(".close-project-form-creation")
);

todoFormRenderer.setupSubmitButton(
    document.querySelector(".todo-dialog button")
);
addCloseButton(
    todoFormRenderer,
    document.querySelector(".close-todo-form-creation")
);

allProjects.forEach((projectRenderer) =>
    projectContainerInstance.addProject(projectRenderer)
);

addProjectButton.addEventListener("click", () => {
    mediator.emit("openProjectForm", projectContainerInstance.projects);
});

deleteProjectButton.addEventListener("click", () => {
    dialogDeleteProject.showModal();
});

projectContainerInstance.setEventListeners(
    addProjectButton,
    deleteProjectButton,
    dialogDeleteProject
);

mediator.subscribe("renderProjectContainer", () => {
    projectContainerInstance.render();
});

function addCloseButton(form, closeButton) {
    closeButton.addEventListener("click", () => {
        form.dialog.close();
    });
}
