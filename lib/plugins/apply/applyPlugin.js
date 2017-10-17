const applyPlugin = Plugin => (...opts) => ({plugins = []}) => {
  return {
    plugins: [new Plugin(...opts)]
  }
};
module.exports = applyPlugin
