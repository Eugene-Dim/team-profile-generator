const Employee = require("./employee");
 
class Manager extends Employee {
    constructor(name, Id, email, phone) {
        super(name, Id, email);
        this.phone = phone;
    }
//  constructor to get office phone and role
    getPhone() {
        return this.phone;
    }
 
    getRole() {
        return 'Manager'
    }
}
 
module.exports = Manager