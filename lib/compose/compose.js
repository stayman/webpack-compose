const typeOf = require('./../typeOf/typeOf')
const mergeWith = require('lodash.mergewith');

const compose = (...args) => args.reduce((acc, curr) => {
  const type = typeOf(curr)
  if (type === 'function') { return mergeWith({}, acc, curr(acc), (obj, src) => {
    if (typeOf(obj) === 'array') {
      return obj.concat(src)
    }
  }) }
  if (type === 'object') { return mergeWith({}, acc, curr, (obj, src) => {
    if (typeOf(obj) === 'array') {
      return obj.concat(src)
    }
  }) }
  return acc
}, {})

module.exports = compose
