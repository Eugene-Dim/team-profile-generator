class Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email = email;
    };
// constructor to return name, id, email, and role 
    getName() {
        return this.name;
    }
 
    getId() {
        return this.Id;
    }
 
    getEmail() {
        return this.email
    }
 
    getRole() {
        return 'Employee';
    }
}
 
module.exports = Employee;