const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const UglifyJS = () => ({ plugins = [] }) => ({
  plugins: plugins.concat(new UglifyJSPlugin())
})

module.exports = UglifyJS
