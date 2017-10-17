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
})
