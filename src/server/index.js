require('~utils/global')
import express from 'express'
import c from 'chalk'
import stylus from 'stylus'
import cssRequireHook from 'css-modules-require-hook'
import webConf from '../../webpack.config'

cssRequireHook({
  extensions: ['.styl'],
  preprocessCss: function (css, filename) {
    return stylus(css)
      .render()
  },
  generateScopedName: webConf.cssLocalIdentName
})

require('require-hooks')(({raw, ext})=> {
  switch (ext) {
    case '.raw':
      return raw
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
