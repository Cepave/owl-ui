require('babel-core/register')
const isDev = process.env.NODE_ENV !== 'production'
const webpackConf = require('./webpack.config')

module.exports = (cfg)=>{
  cfg.set({
    basePath: `./test`,
    files: [
      '**/*-spec.js',
    ],
    exclude: [
      'node_modules/**'
    ],
    frameworks: ['mocha', 'chai'],

    preprocessors: {
      '**/*.js': ['babel', 'coverage', 'webpack']
    },

    webpackMiddleware: {
      stats: {
        color:true
      }
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)\//,
            loader: 'isparta-instrumenter',
          },
        ]
      },
      // for enzyme tests
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      }
    },

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: `${__dirname}/coverage`,
      reporters: [
        { type: 'lcov', subdir: './'},
      ]
    },
    browsers: ['Chrome'],
    singleRun: !isDev,
  })
}
