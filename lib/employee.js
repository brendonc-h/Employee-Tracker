class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    
    getRole() {
        return "Employee";
    }
    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}
module.exports = Employee;