jest.mock('uglifyjs-webpack-plugin', () => function UGLIFY_JS(){})

const compose = require('./../../compose/compose')
const UglifyJS = require('./UglifyJS')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

test('UglifyJS', () => {
  const received = compose(UglifyJS())
  const expected = { plugins: [new UglifyJSPlugin()] }
  expect(received).toMatchObject(expected)
})
