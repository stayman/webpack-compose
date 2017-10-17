const mergeWith = require('lodash.mergewith')
const typeOf = require('./../typeOf/typeOf')

const merge = (memo, newObj) => {
  return mergeWith({}, memo, newObj, (obj, src) => {
    if (typeOf(obj) === 'array') {
      return obj.concat(src)
    }
  })
}

module.exports = merge
