//Establishing Employee class

class Employee {
    contructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole () {
        return this.getRole;
    }
}

module.exports = Employee;