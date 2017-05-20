const compose = require('./../../compose/compose');
const applyPlugin = require('./applyPlugin');


describe('applyPlugin', () => {
  it('should take a plugin, it\'s options and apply it to a config', () => {
    const plugin = jest.fn()
    const expected = {plugins: [new plugin({a: 1})]}
    expect(applyPlugin(plugin)({a: 1})({})).toMatchObject(expected)
  })

  it('should work correctly if no options are provided for the plugin', () => {
    const plugin = jest.fn()
    const expected = {plugins: [new plugin()]}
    expect(applyPlugin(plugin)()({})).toMatchObject(expected)
  })

  it('should preserve anything else in the configuration object', () => {
    const plugin = jest.fn()
    const expected = {plugins: [new plugin()], entry: 'foo'}
    expect(applyPlugin(plugin)()({entry: 'foo'})).toMatchObject(expected)
  })
})
