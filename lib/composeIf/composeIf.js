const compose = require('./../compose/compose')
const typeOf = require('./../utils/typeOf/typeOf')

const composeif = (predicate, iftrue, iffalse = {}) => predicate
  ? compose(iftrue)
  : compose(iffalse)

module.exports = composeif
