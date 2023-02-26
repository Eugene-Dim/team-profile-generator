const Employee = require("./employee");
 
class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email)
        this.school = school;
    }
//  constructor to return school and role
    getRole() {
        return 'Intern'
    }
 
    getSchool() {
        return this.school
    }
}
 
module.exports = Intern