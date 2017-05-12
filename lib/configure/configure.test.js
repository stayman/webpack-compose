const configure = require('./configure')
const entry = require('./../entry/entry')
const output = require('./../output/output')

describe('configure() tests', () => {
  test('configure with entry', () => {
    const received = configure(entry('./app/entry'))
    const expected = { entry: './app/entry' }
    expect(received).toMatchObject(expected)
  })

  test('configure with output', () => {
    const received = configure(output('./dist/'))
    const expected = { output: { path: './dist/' } }
    expect(received).toMatchObject(expected)
  })

  test('configure with entry and output', () => {
    const received = configure(
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
