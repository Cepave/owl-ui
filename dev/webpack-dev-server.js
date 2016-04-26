import webpack from 'webpack'
import devMid from 'webpack-dev-middleware'
import hotMid from 'webpack-hot-middleware'
import webpackConf from '../webpack.config'
import c from 'chalk'
import express from 'express'

const wbeServer = express()
const packer = webpack(webpackConf)

wbeServer
  .use(devMid(packer, {
    stats: {
      colors: true,
      staticPath: webpackConf.output.publicPath,
    }
  }))
  .use(hotMid(packer))
  .listen(3001, ()=> {
    console.log(`💥 Webpack dev server is listening ${c.cyan(3001)}`)
  })
