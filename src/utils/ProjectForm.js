import mediator from "./mediator";
class ProjectForm {
    constructor(dialog, form, createProject) {
        this.dialog = dialog;
        this.createProject = createProject;
        this.form = form;
        this.currentProject = null;
        mediator.subscribe("openProjectForm", (projects) => {
            this.projects = projects;
            this.dialog.showModal();
        });
    }

    setupSubmitButton(button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            if (!this.projects) return;
            const formdata = new FormData(this.form);
            const name = formdata.get("project-name");
            if (name.trim() === "") {
                return;
            }
            const newProject = this.createProject(name);
            this.projects.push(newProject);
            mediator.emit("renderProjectContainer");
            this.dialog.close();
            this.form.reset();
        });
    }
}
export default ProjectForm;
