const composeIf = require('../../lib/composeIf/composeIf');
const compose = require('../../lib/compose/compose');
const rule = require('../../lib/rules/rules');
const typeOf = require('../../lib/utils/typeOf/typeOf');
const applyPlugin = require('../../lib/plugins/apply/applyPlugin');

module.exports = (condition = process.env.NODE_ENV === 'production') => (test, use, filename, cssOpts = {}, opts = {}) => () => {
  let ExtractTextPlugin;
  try {
    ExtractTextPlugin = require('extract-text-webpack-plugin');
  } catch (e) {
    throw new Error('ExtractTextPlugin not found, please run npm i -D extract-text-webpack-plugin');
  }

  const useClause = typeOf(use) === 'object' && !condition
    ? [use.fallback].concat(use.use)
    : use;

  return composeIf(
    condition,
    [
      rule(
        test,
        ExtractTextPlugin.extract(useClause),
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
    rule(test, useClause, opts)
  );
}
