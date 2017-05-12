// const config = webpack
//   .src('/src')
//   .plugin(new CSS())
//   .plugins([
//
//   ])
//   .loader({
//
//   })
//   .loaders([
//
//   ])
//
//
// module.exports = config
//
//
// const config = webpack(
//   env(DEVELOPMENT)
//   DEVELOPMENT ? src('src/dev') : src('src/prod'),
//   plugin()
//   plugins()
//   rule({ test: /\.jsx?$/, loader: 'babel-loader' })
//   rules([
//
//   ])
// )
//
// export const webpack = (...fns) => fns.reduce((acc, curr) => ({ ...acc, ...curr(acc) }), {})

const typeOf = require('./typeOf')

// const compose = (...args) => args.reduce((acc, curr) => {
//   const type = typeOf(curr)
//   if (type === 'function') { return Object.assign({}, acc, curr(acc)) }
//   if (type === 'object') { return Object.assign({}, acc, curr) }
//   return acc
// }, {})
//
// const validate = ([
//   ['array', 'string'],
//   ['object', 'string'],
//   ['object', 'array', 'string'],
//   ['string']
// ]) => {}
//
// const expect = ({
//   fail,
//   pass,
//   types,
//   value,
//   warning
// }) => types.includes(typeOf(value))
//   ? pass
//   : console.warn(warning) || fail
//
// const entry = points => () => expect({
//   fail: {},
//   pass: { entry: points },
//   types: ['array', 'object', 'string'],
//   value: points,
//   warning: `Please pass a valid type for entry(): ['array', 'object', 'string']`
// })
//
// const config = compose(
//   entry([
//     false
//   ])
// )
// 
// const validatePaths = (value, paths) => paths.some(path => validatePath(value, path))
//
// console.log(validatePaths([], [['array']]))
