const Employee = require('../lib/employee');
//  test for any new employee for name, id, email, and role
describe('Employee', () => {
   describe('Initialization', () => {
       it('should return an object with name, id, and email properties', () => {
            const employeeObj = new Employee()
            expect(employeeObj instanceof Employee).toEqual(true)
       });
   });
   describe('getName', () => {
    it('should return the name of the employee', () => {
        const employee = new Employee('Chief, 1, masterchief@gmail.com');
        expect(employee.getName()).toEqual('Chief')
    });
   }) ;
   describe('getId', () => {
    it('should return the Id of the employee', () => {
        const employee = new Employee('Chief, 1, masterchief@gmail.com');
        expect(employee.getId()).toEqual(1)
    });
   });
   describe('getEmail', () => {
    it('should return the email of the employee', () => {
        const employee = new Employee('Chief, 1, masterchief@gmail.com');
        expect(employee.getEmail()).toEqual('masterchief@gmail.com')
    });
   });
   describe('getRole', () => {
    it('should return the role employee', () => {
        const employee = new Employee('Chief, 1, masterchief@gmail.com');
        expect(employee.getRole()).toEqual('Employee')
    });
   });
})