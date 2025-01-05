class DeleteProjectForm {
    constructor(projectContainer, dialog, openButton) {
        this.projectContainer = projectContainer;
        this.dialog = dialog;
        this.openButton = openButton;
        openButton.addEventListener("click", () => {
            this.renderDeletingProject(dialog);
            dialog.showModal();
        });
    }

    renderDeletingProject(dialog) {
        const ul = dialog.querySelector(".projects");
        ul.innerHTML = "";
        const h2 = document.createElement("h2");
        h2.textContent = "Which project to delete?";
        ul.appendChild(h2);
        this.projectContainer.projects.forEach((projectRenderer, index) => {
            const button = document.createElement("button");
            button.textContent = projectRenderer.project.name;
            button.addEventListener("click", () => {
                this.projectContainer.removeProject(index);
                dialog.close();
            });
            ul.appendChild(button);
        });
    }
}
export default DeleteProjectForm;
