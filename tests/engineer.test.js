import Engineer from '../lib/engineer.js';

describe('Engineer', () => {
  test('getGithub returns the Github username', () => {
    const engineer = new Engineer('eugene', 1, 'eugene@gmail.com', 'eugene-dim');
    expect(engineer.getGithub()).toEqual('eugene-dim');
  });

  test('getRole returns the role of the engineer', () => {
    const engineer = new Engineer('eugene', 1, 'eugene@gmail.com');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
