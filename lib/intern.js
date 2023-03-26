const Employee = require("./employee");
 
class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email)
        this.school = school;
    }

    getRole() {
        return 'intern'
    }
 
    getSchool() {
        return this.school
    }
}
 
module.exports = intern;