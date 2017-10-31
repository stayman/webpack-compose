const target = require('./target')

describe('target', () => {
  test('target should add a target field', () => {
    expect(target('web')()).toEqual({
      target: 'web'
    })
  })
})
