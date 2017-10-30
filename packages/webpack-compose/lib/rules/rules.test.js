const rules = require('./rules');

describe('rules() tests', () => {
  test('rules returns within modules', () => {
    expect(rules('abc', 'babel-loader')({})).toMatchObject({
      module: {
        rules: [
          {
            test: 'abc',
            use: 'babel-loader'
          }
        ]
      }
    })
  })

  test('rules can take an option for top level options', () => {
    expect(rules('abc', 'foo-loader', {
      exclude: '123'
    })({})).toMatchObject({
      module: {
        rules: [
          {
            test: 'abc',
            use: 'foo-loader',
            exclude: '123'
          }
        ]
      }
    })
  })
})
