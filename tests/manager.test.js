const Manager = require('../lib/manager');
// test functions for managers for office phone number and role
describe('getPhone', () => {
    it('should get the office phone number of the manager', () => {
        const manager = new Manager('Jeremy', 1, 'jeremyfong@yahoo.com', '8989')
 
        expect(manager.getPhone()).toEqual('8989')
    })
})
 
describe('getRole', () => {
    it('should get the role of the manager', () => {
        const manager = new Manager('Jeremy', 1, 'jeremyfong@yahoo.com', 8989)
        expect(manager.getRole()).toEqual('Manager')
    })
})