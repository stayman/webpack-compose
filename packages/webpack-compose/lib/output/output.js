const typeOf = require('./../utils/typeOf/typeOf')

const output = config => () => ({
  output: typeOf(config) === 'string' ? { path: config } : config
})

module.exports = output
