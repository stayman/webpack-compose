const configure = require('./configure')
const entry = require('./../entry/entry')

describe('configure() tests', () => {
  test('configure with entry', () => {
    const received = configure(entry('./app/entry'))
    const expected = { entry: './app/entry' }
    console.log({ expected, received })
    expect(received).toMatchObject(expected)
  })
})
