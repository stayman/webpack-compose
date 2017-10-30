const composeIf = require('webpack-compose/lib/composeIf/composeIf');
const compose = require('webpack-compose/lib/compose/compose');
const rule = require('webpack-compose/lib/rules/rules');
const applyPlugin = require('webpack-compose/lib/plugins/apply/applyPlugin');

module.exports = (condition = process.env.NODE_ENV === 'production') => (test, loaders, filename, fallback, pluginOpts = {}, opts = {}) => {
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

  return composeIf(
    condition,
    [
      rule(
        test,
        ExtractTextPlugin({
          fallback: fallback,
          use: loaders
        }),
        opts
      ),
      applyPlugin(ExtractTextPlugin)(
        Object.assign({},
          {
            filename
          },
          cssOpts
        )
      )
    ],
    rule(test, (fallback ? [fallback] : []).concat(loaders), opts)
  )
}
