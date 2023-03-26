import Manager from '../lib/manager';

describe('Manager', () => {
  describe('getPhone', () => {
    it('returns the office phone number of the manager', () => {
      const manager = new Manager('Eugene', 1, 'eugene@gmail.com', '0101');
      expect(manager.getPhone()).toBe('0101');
    });
  });

  describe('getRole', () => {
    it('returns the role of the manager', () => {
      const manager = new Manager('Eugene', 1, 'eugene@gmail.com', '0101');
      expect(manager.getRole()).toBe('Manager');
    });
  });
});
