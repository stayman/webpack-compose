const compose = require('./compose')
const entry = require('./../entry/entry')
const output = require('./../output/output')
const applyPlugin = require('../plugins/apply/applyPlugin');

describe('compose() tests', () => {
  test('compose with entry', () => {
    const received = compose(entry('./app/entry'))
    const expected = { entry: './app/entry' }
    expect(received).toMatchObject(expected)
  })

  test('compose with output', () => {
    const received = compose(output('./dist/'))
    const expected = { output: { path: './dist/' } }
    expect(received).toMatchObject(expected)
  })

  test('compose with entry and output', () => {
    const received = compose(
      entry('./app/entry'),
      output('./dist/')
    )
    const expected = {
      entry: './app/entry',
      output: { path: './dist/' }
    }
    expect(received).toMatchObject(expected)
  })

  test('compose with multiple plugins', () => {
    const plugin1 = jest.fn()
    const plugin2 = jest.fn()
    const received = compose(
      applyPlugin(plugin1)(),
      applyPlugin(plugin2)()
    )
    const expected = {
      plugins: [
        new plugin1(),
        new plugin2()
      ]
    }

    expect(received).toMatchObject(expected);
  })
})
