class Project {
    constructor(name, ...elements) {
        this.name = name;
        this.elements = elements;
    }
    addElement(element) {
        this.elements.push(element);
    }
}

export default Project;
