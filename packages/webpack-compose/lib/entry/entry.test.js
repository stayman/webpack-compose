const entry = require('./entry')

const entryTest = ({
  expected,
  name,
  paths,
  value
}) => test(
  name,
  () => expect(entry(value, paths)()).toMatchObject(expected)
)

describe('entry() tests', () => {

    entryTest({
      expected: { entry: './app/entry' },
      name: 'single string value',
      paths: ['string'],
      value: './app/entry'
    })

    entryTest({
      expected: { entry: ["./app/entry1", "./app/entry2"] },
      name: 'array of strings',
      paths: ['array', 'string'],
      value: ["./app/entry1", "./app/entry2"]
    })
})
