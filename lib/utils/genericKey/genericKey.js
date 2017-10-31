const genericKey = key => value => () => ({
  [key]: value
})

module.exports = genericKey
