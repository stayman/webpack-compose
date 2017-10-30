const typeOf = require('./../utils/typeOf/typeOf')
const merge = require('./../utils/merge/merge')

const compose = (...args) => args.reduce((acc, curr) => {
  const type = typeOf(curr)
  if (type === 'function') { return merge(acc, curr(acc)) }
  if (type === 'object') { return merge(acc, curr) }
  return acc
}, {})

module.exports = compose
