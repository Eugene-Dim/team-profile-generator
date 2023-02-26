const Intern = require('../lib/intern');
// test functions for interns for school and role
describe('getSchool', () => {
    it('should get the school or university', () => {
        const intern = new Intern('Jeremy', 1, 'jeremyfong@yahoo.com', 'SDSU')
 
        expect(intern.getSchool()).toEqual('SDSU')
    })
})
 
describe('getRole', () => {
    it('should get the role of the Intern', () => {
        const intern = new Intern('Jeremy', 1, 'jeremyfong@yahoo.com')
        expect(intern.getRole()).toEqual('Intern')
    })
})