const Employee = require("./employee");
 
class Manager extends Employee {
    constructor(name, Id, email, phoneNumber) {
        super(name, Id, email);
        this.phoneNumber = phoneNumber;
    }

    getPhone() {
        return this.phoneNumber;
    }
 
    getRole() {
        return 'manager'
    }
}
 
module.exports = manager;