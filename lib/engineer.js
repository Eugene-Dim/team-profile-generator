const Employee = require("./employee");
 
class Engineer extends Employee {
    constructor(name, Id, email, github) {
        super(name, Id, email)
        this.github = github;
    };
//  constructor to return Github username and role
    getGithub() {
        return this.github
    };
 
    getRole() {
        return 'Engineer'
    }
}
 
module.exports = Engineer
