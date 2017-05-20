const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const applyPlugin = require('../apply/applyPlugin');


module.exports = applyPlugin(UglifyJSPlugin);
