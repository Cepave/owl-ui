require('babel-core/register')

const path = require('path')

require(path.join(process.cwd(), process.argv.slice(-1)[0]))
