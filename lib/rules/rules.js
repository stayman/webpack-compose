const rules = (test, use, opts = {}) => () => ({
  module: {
    rules: [
      Object.assign({}, {
        test,
        use
      }, opts)
    ]
  }
})


module.exports = rules
