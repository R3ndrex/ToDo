import mediator from "./mediator";
class TodoForm {
    constructor(dialog, form, createTodoItem) {
        this.dialog = dialog;
        this.createTodoItem = createTodoItem;
        this.form = form;
        this.currentProject = null;
        mediator.subscribe("openTodoForm", (project) => {
            this.currentProject = project;
            this.dialog.showModal();
        });
    }

    setupCloseButton(button) {
        button.addEventListener("click", () => {
            this.dialog.close();
        });
    }
    setupSubmitButton(button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            if (!this.currentProject) return;
            const formdata = new FormData(this.form);
            const data = Array.from(formdata.values());
            if (data.includes("")) {
                return alert("All fields must be filled out.");
            }
            const newTodo = this.createTodoItem(...data);
            this.currentProject.addElement(newTodo);
            mediator.emit("createdTodo", this.currentProject);
            this.dialog.close();
            this.form.reset();
        });
    }
}
export default TodoForm;
