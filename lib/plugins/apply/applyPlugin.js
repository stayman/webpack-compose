const applyPlugin = Plugin => (...opts) => config => Object.assign({}, config,
  {plugins: (config.plugins || []).concat(new Plugin(...opts))}
);

module.exports = applyPlugin
