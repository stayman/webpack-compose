const typeOf = require('./typeOf')

const validatePath = (value, path) => {
  const type = typeOf(value)
  if (!(path && path.length && path[0].includes(type))) { return false }
  if (type !== 'array' && type !== 'object') { return true }
  return Object.values(value).every(v => validatePath(v, path.slice(1)))
}

module.exports = validatePath
