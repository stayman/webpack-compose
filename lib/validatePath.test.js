const validatePath = require('./validatePath')

const validatePathTest = ({
  expected,
  name,
  path,
  value
}) => test(
  name,
  () => expect(validatePath(value, path)).toBe(expected)
)

describe('validatePath() tests', () => {
  describe('primitive values', () => {

    validatePathTest({
      expected: false,
      name: 'undefined value',
      path: ['number']
    })

    validatePathTest({
      expected: false,
      name: 'undefined path',
      value: 0
    })

    validatePathTest({
      expected: true,
      name: 'is a number',
      path: ['number'],
      value: 0
    })

    validatePathTest({
      expected: false,
      name: 'is not a number',
      path: ['number'],
      value: 'test'
    })

    validatePathTest({
      expected: true,
      name: 'is a string',
      path: ['string'],
      value: 'test'
    })

    validatePathTest({
      expected: false,
      name: 'is not a string',
      path: ['string'],
      value: 0
    })

    validatePathTest({
      expected: true,
      name: 'is an array',
      path: ['array'],
      value: []
    })

    validatePathTest({
      expected: false,
      name: 'is not an array',
      path: ['array'],
      value: {}
    })

  })

  describe('nested objects', () => {

    validatePathTest({
      expected: true,
      name: 'one level deep with string',
      path: ['object', 'string'],
      value: { test: 'test' }
    })

    validatePathTest({
      expected: true,
      name: 'one level deep with array',
      path: ['object', 'array', 'string'],
      value: { test: ['test'] }
    })

    validatePathTest({
      expected: true,
      name: 'one level deep with array or string',
      path: ['object', 'array|string', 'string'],
      value: { test: 'test', test2: ['test'] }
    })

    validatePathTest({
      expected: true,
      name: 'two levels deep',
      path: ['object', 'object', 'string'],
      value: { test: { test: 'test' } }
    })

  })
})
