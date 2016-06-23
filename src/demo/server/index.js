require('~utils/global')
require('./require-hooks')

import express from 'express'
import c from 'chalk'

const cwd = process.cwd()
const server = express()

server
  .use('/static', express.static(`${cwd}/static`))
  .use(require('./html-mid'))
  .listen(3000, ()=> {
    console.log(`🌎 Server is running: 0.0.0.0:${c.cyan(3000)}/owl-ui/`)
  })
