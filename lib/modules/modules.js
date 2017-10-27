const modules = (modulePaths, suppressNodeModules) => () => ({
  resolve: {
    modules: modulePaths.concat(suppressNodeModules ? [] : 'node_modules')
  }
})

module.exports = modules;
