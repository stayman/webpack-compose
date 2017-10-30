const devServer = (path, port, opts) => () => ({
  devServer: Object.assign({}, {
    contentBase: path,
    port: port || 3000
  }, (opts || {}))
});

module.exports = devServer;
