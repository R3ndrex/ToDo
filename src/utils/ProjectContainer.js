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
    }
    setEventListeners(addProjectButton) {
        addProjectButton.addEventListener("click", () => {
            mediator.emit("openProjectForm", this.projects);
        });
    }
}

export default ProjectContainer;
