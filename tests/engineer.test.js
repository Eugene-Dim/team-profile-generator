const Engineer = require('../lib/engineer');
// test functions for engineers for Github username and role
describe('getGithub', () => {
    it('should get the Github username', () => {
        const engineer = new Engineer('Jeremy', 1, 'jeremyfong@yahoo.com', 'jeremy-fong')
 
        expect(engineer.getGithub()).toEqual('jeremy-fong')
    })
})
 
describe('getRole', () => {
    it('should get the role of the engineer', () => {
        const engineer = new Engineer('Jeremy', 1, 'jeremyfong@yahoo.com')
        expect(engineer.getRole()).toEqual('Engineer')
    })
})