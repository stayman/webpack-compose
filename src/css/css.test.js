const css = require('./css');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

describe('css', () => {
  test('if in production, use extract text plugin', () => {
    const result = css(true)(/\.css$/, ['css-loader', 'sass-loader'], 'app.css')();
    expect(result).toMatchObject({
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
          }
        ]
      }
    })

    expect(result.plugins.length).toEqual(1)

    expect(result.plugins[0].filename).toEqual('app.css')
  })

  test('if not in production, do not use extract text plugin', () => {
    const result = css(false)(/\.css/, ['css-loader', 'sass-loader'], 'app.css')()

    expect(result).toMatchObject({
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      }
    })
  })

  test('plugin options are definable', () => {
    const result = css(true)(/\.css/, ['css-loader', 'sass-loader'], 'app.css', {allChunks: true})()
    expect(result.plugins[0].options).toEqual({allChunks: true})
  })

  test('loader options are defined', () => {
    const result = css(true)(/\.css/, ['css-loader', 'sass-loader'], 'app.css', {}, {include: 'foo/bar', exclude: 'baz/quux'})

  })
})
