const rules = (test, use) => ({module = {}}) => ({
  module: {
    rules: [
      {
        test,
        use
      }
    ]
  }
})


module.exports = rules
