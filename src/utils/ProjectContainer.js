import mediator from "./mediator";
class ProjectContainer {
    constructor(container) {
        this.container = container;
        this.projects = [];
    }
    addProject(projectRenderer) {
        this.projects.push(projectRenderer);
        this.render();
    }
    removeProject(index) {
        this.projects.splice(index, 1);
        this.render();
    }
    render() {
        this.container.innerHTML = "";
        this.saveLocalProjects(this.projects);
        this.projects.forEach((projectRenderer, index) => {
            projectRenderer.setIndex(index);
            projectRenderer.render();
            projectRenderer.append();
        });
    }
    saveLocalProjects(projects) {
        const projectNames = projects.map((projectRenderer) => {
            return projectRenderer.project.name;
        });
        localStorage.setItem(`Projects`, JSON.stringify(projectNames));
        console.log(projectNames);
    }
    renderDeletingProject(dialog) {
        dialog.innerHTML = "";
        const ul = document.createElement("ul");
        const h2 = document.createElement("h2");
        h2.textContent = "Which project to delete?";
        ul.appendChild(h2);
        ul.classList.add("projects");
        this.projects.forEach((projectRenderer, index) => {
            const button = document.createElement("button");
            button.textContent = projectRenderer.project.name;
            button.addEventListener("click", () => {
                this.removeProject(index);
                dialog.close();
            });
            ul.appendChild(button);
        });
        dialog.appendChild(ul);
    }
    setEventListeners(
        addProjectButton,
        deleteProjectButton,
        dialogDeleteProject
    ) {
        addProjectButton.addEventListener("click", () => {
            mediator.emit("openProjectForm", this.projects);
        });

        deleteProjectButton.addEventListener("click", () => {
            this.renderDeletingProject(dialogDeleteProject);
            dialogDeleteProject.showModal();
        });
    }
}

export default ProjectContainer;
