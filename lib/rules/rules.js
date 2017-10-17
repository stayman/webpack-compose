const rules = (test, use) => ({module = {}}) => {
  const rules = module.rules || [];

  return {
    module: {
      rules: [
        ...rules,
        {
          test,
          use
        }
      ]
    }
  }
}
