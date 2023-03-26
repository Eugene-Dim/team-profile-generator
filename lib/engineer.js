const Employee = require("./employee");
 
class Engineer extends Employee {
    constructor(name, Id, email, github) {
        super(name, Id, email)
        this.github = github;
    };

    getRole() {
        return 'Engineer'
    }
    
    getGithub() {
        return this.github
    };
 
}
 
module.exports = Engineer
