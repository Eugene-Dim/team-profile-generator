const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('getSchool', () => {
    it('should get the school or university', () => {
      const intern = new Intern('eugene', 1, 'eugene@gmail.com', 'UCD');
      expect(intern.getSchool()).toEqual('UCD');
    });
  });

  describe('getRole', () => {
    it('should get the role of the Intern', () => {
      const intern = new Intern('eugene', 1, 'eugene@gmail.com');
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
