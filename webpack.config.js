const isDev = process.env.NODE_ENV !== 'production'
import webpack from 'webpack'
import ExtractText from 'extract-text-webpack-plugin'

//import Webpack_isomorphic_tools_plugin from 'webpack-isomorphic-tools/plugin'
//const webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(require('./webpack.isomorphic.config')).development()

const conf = {
  cssLocalIdentName: '[name]-[local]-[hash:base64:5]',
  publicPath: '//localhost:3001/',
}

module.exports = {
  ...conf,
  entry: {
    'owl-ui': isDev
      ? ['./src/demo', `webpack-hot-middleware/client?path=${conf.publicPath}__webpack_hmr`]
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
//        loader: ExtractText.extract('style', [
//          `css?sourceMap&modules&localIdentName=${conf.cssLocalIdentName}`,
//          'stylus'
//        ])
        loaders: [
          'style',
          `css?sourceMap&modules&localIdentName=${conf.cssLocalIdentName}`,
          'stylus'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  stylus: {
//    import: `${__dirname}/aa`,
  },

  plugins: [
    new webpack.DefinePlugin({
      __isNode: false
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
  watch: isDev ,
  devtool: isDev ? 'eval' : '',
  externals: isDev ? {} : {
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
    }
  }
}
