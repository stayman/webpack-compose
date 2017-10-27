const composeIf = require('../../lib/composeIf/composeIf');
const compose = require('../../lib/compose/compose');
const rule = require('../../lib/rules/rules');
const applyPlugin = require('../../lib/plugins/apply/applyPlugin');

module.exports = (condition = process.env.NODE_ENV === 'production') => (test, use, filename, cssOpts = {}, opts = {}) => () => {
  let ExtractTextPlugin;
  try {
    ExtractTextPlugin = require('extract-text-webpack-plugin');
  } catch (e) {
    throw new Error('ExtractTextPlugin not found, please run npm i -D extract-text-webpack-plugin');
  }

  return composeIf(
    condition,
    compose(
      rule(
        test,
        ExtractTextPlugin.extract(use),
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
    ),
    rule(test, use, opts)
  );
}
