const typeOf = require('./typeOf')

const validatePath = (value, path) => {
  // 1. Get the type represented by a string.
  const type = typeOf(value)

  // 2. Check to see if the path exists and the first index matches the value.
  if (!(path && path.length && path[0].includes(type))) { return false }

  // 3. If the value is a primitive, then just return true.
  if (type !== 'array' && type !== 'object') { return true }

  // 4. Otherwise, recursively call the function until path length is 1.
  return Object.values(value).every(v => validatePath(v, path.slice(1)))
}

module.exports = validatePath
