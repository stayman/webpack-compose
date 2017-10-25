const node = require('./node');

describe('node() tests', () => {
  test('it should append a node key', () => {
    expect(node({a: 'b'})()).toMatchObject({
      node: {
        a: 'b'
      }
    });
  });
});
