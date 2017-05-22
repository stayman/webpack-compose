const compose = require('./../compose/compose')
const composeIf = require('./composeIf')
const entry = require('./../entry/entry')
const output = require('./../output/output')

describe('composeIf() tests', () => {
  test('composeIf with true if statement', () => {
    const received = composeIf(true, entry('./app/entry'))
    const expected = { entry: './app/entry' }
    expect(received).toMatchObject(expected)
  })

  test('composeIf with false if statement', () => {
    const received = composeIf(false, entry('./app/entry'))
    const expected = {}
    expect(received).toMatchObject(expected)
  })

  test('composeIf with true if/else statement', () => {
    const received = composeIf(
      true,
      entry('./app/entry'),
      entry('./src/entry')
    )
    const expected = { entry: './app/entry' }
    expect(received).toMatchObject(expected)
  })

  test('composeIf with false if/else statement', () => {
    const received = composeIf(
      false,
      entry('./app/entry'),
      entry('./src/entry')
    )
    const expected = { entry: './src/entry' }
    expect(received).toMatchObject(expected)
  })

  test('composeIf wrapped in compose', () => {
    const received = compose(composeIf(true, entry('./app/entry')))
    const expected = { entry: './app/entry' }
    expect(received).toMatchObject(expected)
  })
})
