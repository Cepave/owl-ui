require('~utils/global')
require('./require-hooks')

import express from 'express'
import c from 'chalk'

const cwd = process.cwd()
const server = express()

server
  .use('/static', express.static(`${cwd}/static`))
  .use(require('./html'))
  .listen(3000, ()=> {
    console.log(`🌎 Server is listening ${c.cyan(3000)}`)
  })
