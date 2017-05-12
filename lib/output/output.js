const typeOf = require('./../typeOf/typeOf')

const output = config => () => {

  if (typeOf(config) === 'string') { return { output: { path: config } } }

  return { output: config }
}

module.exports = output
