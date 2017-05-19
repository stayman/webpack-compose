const compose = require('./compose')
const entry = require('./../entry/entry')
const output = require('./../output/output')

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
})
