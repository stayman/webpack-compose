const devServer = (path, port, opts) => () => ({
  devServer: Object.assign({}, {
    contentBase: path,
    port: port
  }, (opts || {}))
});
