const modules = require('./modules');

describe('modules() function', () => {
  test('modules should include a single array with all values and node_modules', () => {
    expect(modules(['a', 'b'])()).toEqual({
      resolve: { modules: ['a', 'b', 'node_modules'] }
    })
  })

  test('adding a true in the second argument will omit node_modules', () => {
    expect(modules(['ab'], true)()).toEqual({
      resolve: {
        modules: ['ab']
      }
    })
  })
})
