import {readFileSync} from 'fs'
import stylus from 'stylus'
import webConf from '../../../webpack.config'

require('css-modules-require-hook')({
  extensions: ['.styl', '.css'],
  preprocessCss(css, filename) {
    return stylus(css)
      .set('filename', filename)
      .set('paths', webConf.stylus.paths)
      .import(webConf.stylus.import)
      .render()
  },
  generateScopedName: webConf.cssLocalIdentName
})

require('require-hooks')(({rawPath, ext}) => {
  switch (ext) {
    case '.raw':
      return readFileSync(rawPath).toString()
  }
})
