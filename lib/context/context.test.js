const context = require('./context')

describe('context()', () => {
  test('it should set a context key', () => {
    expect(context('foo')()).toEqual({
      context: 'foo'
    })
  })
})
