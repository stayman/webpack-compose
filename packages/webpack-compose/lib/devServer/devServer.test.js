const devServer = require('./devServer');

describe('devServer()', () => {
  test('it should take args for contentBase and port', () => {
    expect(devServer('a/b', 4000)({})).toEqual({
      devServer: {
        contentBase: 'a/b',
        port: 4000
      }
    });
  });

  test('it should default port to 3000 if not specified', () => {
    expect(devServer('a/b')({})).toEqual({
      devServer: {
        contentBase: 'a/b',
        port: 3000
      }
    });
  });

  test('it should take an additional arguments property for other devserver keys', () => {
    expect(devServer('a/b', 1231, {
      compress: true
    })({})).toEqual({
      devServer: {
        contentBase: 'a/b',
        port: 1231,
        compress: true
      }
    })
  });
});
