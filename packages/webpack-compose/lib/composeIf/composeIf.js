const compose = require('./../compose/compose')
const typeOf = require('./../utils/typeOf/typeOf')

const composeif = (predicate, iftrue, iffalse = {}) => predicate

  ? compose(
      ...(
        typeOf(iftrue) === 'array'
          ? iftrue
          : [iftrue]
        )
      )
  : compose(
    ...(
      typeOf(iffalse) === 'array'
        ? iffalse
        : [iffalse]
    )
  )

module.exports = composeif
