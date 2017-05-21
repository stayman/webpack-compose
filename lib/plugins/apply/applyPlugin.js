const applyPlugin = Plugin => (...opts) => ({plugins = []}) => ({plugins: plugins.concat(new Plugin(...opts))});

module.exports = applyPlugin
