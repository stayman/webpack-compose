const typeOf = require('./../typeOf/typeOf')

const compose = (...args) => args.reduce((acc, curr) => {
  const type = typeOf(curr)
  if (type === 'function') { return Object.assign({}, acc, curr(acc)) }
  if (type === 'object') { return Object.assign({}, acc, curr) }
  return acc
}, {})

module.exports = compose
