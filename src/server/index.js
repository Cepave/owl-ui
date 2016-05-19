require('~utils/global')
import express from 'express'
import c from 'chalk'
import stylus from 'stylus'
import cssRequireHook from 'css-modules-require-hook'
import webConf from '../../webpack.config'
import fs, {readFileSync} from 'fs'

cssRequireHook({
  extensions: ['.styl', '.css'],
  preprocessCss: function (css, filename) {
    return stylus(css)
      .set('filename', filename)
      .set('paths', webConf.stylus.paths)
      .import(webConf.stylus.import)
      .render()
  },
  generateScopedName: webConf.cssLocalIdentName
})

require('require-hooks')(({rawPath, ext})=> {
  switch (ext) {
    case '.raw':
      return readFileSync(rawPath).toString()
  }
})

const cwd = process.cwd()
const server = express()

server
  .use('/static', express.static(`${cwd}/static`))
  .use(require('./html'))
  .listen(3000, ()=> {
    console.log(`🌎 Server is listening ${c.cyan(3000)}`)
  })
