import webpack from 'webpack'
import ExtractText from 'extract-text-webpack-plugin'
import pkg from './package.json'
import koutoSwiss from 'kouto-swiss'

const webpackEnv = process.env.WEBPACK
const NODE_ENV = process.env.NODE_ENV

const isDemo = webpackEnv === 'demo'
const isProd = NODE_ENV === 'production'
const isDev = !webpackEnv && !isProd && !isDemo
//console.log({isDev, isDemo, isProd})

const conf = {
  isDemo, isProd, isDev,
  cssLocalIdentName: '[name]-[local]-[hash:base64:5]',
  publicPath: '//localhost:3001/',
}

module.exports = {
  ...conf,
  entry: {
    'owl-ui': !isProd
      ? ['./src/demo/client'].concat(isDemo ? [] : [`webpack-hot-middleware/client?path=${conf.publicPath}__webpack_hmr`])
      : './src/components'
  },
  output: {
    path: isProd ? `${__dirname}/dist` : isDemo ? `${__dirname}/demo` : `${__dirname}/static`,
    filename: '[name].js',
    library: 'OWLUI',
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
        test: /\.json$/,
        loader: 'json'
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
  resolve: {
    alias: isDemo ? {
      'react-dom': 'react-dom/dist/react-dom.min.js',
      'react-redux': 'react-redux/dist/react-redux.min.js',
      'redux': 'redux/dist/redux.min.js',
      'redux-thunk': 'redux-thunk/dist/redux-thunk.min.js',
    } : {}
  },

  stylus: {
    use: [koutoSwiss()],
    paths: [`${__dirname}/node_modules`],
    import: `${__dirname}/src/stylus/variables.styl`
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
    ...Object.keys(pkg.dependencies).reduce((o, dep) => {
      o[dep] = true
      return o
    }, {}),
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
  } : {}
}
