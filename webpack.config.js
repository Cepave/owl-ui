import webpack from 'webpack'
import ExtractText from 'extract-text-webpack-plugin'

const webpackEnv = process.env.WEBPACK

const isDev = !webpackEnv
const isDemo = webpackEnv === 'demo'
const isProd = webpackEnv === 'production'
//console.log({isDev, isDemo, isProd})

const conf = {
  cssLocalIdentName: '[name]-[local]-[hash:base64:5]',
  publicPath: '//localhost:3001/',
}

module.exports = {
  ...conf,
  entry: {
    'owl-ui': isDev
      ? ['./src/demo/client'].concat(isDemo ? [] : [`webpack-hot-middleware/client?path=${conf.publicPath}__webpack_hmr`])
      : ['./src/components'],
  },
  output: {
    path: `${__dirname}/static`,
    filename: '[name].js',
    library: '',
    libraryTarget: 'umd',
    publicPath: conf.publicPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: isDev ? ['react-hmre'] : []
        }
      },

      {
        test: /\.raw$/,
        loader: 'raw',
      },

      {
        test: /\.styl$/,
        loader: isDev ?
          'style!' +
          `css?sourceMap&modules&localIdentName=${conf.cssLocalIdentName}!` +
          'stylus' :
        ExtractText.extract('style', [
          `css?modules&localIdentName=[hash:base64:11]`,
          'stylus'
        ])
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url?limit=100000'
      },

      {
        test: /\.css$/,
        loader: 'style!css'
      },

    ]
  },

  stylus: {
    paths: [`${__dirname}/node_modules`],
    import: `${__dirname}/src/stylus/variables.styl`,
  },

  plugins: [
    new webpack.DefinePlugin({
      __isNode: false,
      __isDev: isDev,
    })
  ].concat(isDev
    ?
      [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
      ]
    :
      [
        new ExtractText('owl-ui.css'),
      ]
  ),
  watch: isDev,
  devtool: isDev ? 'eval' : '',
  externals: isProd ? {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
    'react-tag': true,
    'lodash.isequal': true,
  } : {}
}
