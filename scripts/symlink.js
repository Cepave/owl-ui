import fs from 'fs'
import glob from 'glob'
import c from 'chalk'
import path from 'path'

const nodeModulesPath = path.join(__dirname, '/../node_modules')
const srcPath = path.join(__dirname, '/../src')

const ln = (from, to)=> {
  const logto = c.cyan(path.relative(nodeModulesPath, to))
  const logfrom = path.relative(path.join(srcPath, '../'), from)

  console.log(`${c.yellow('(symlink)')} ${logfrom} -> ${logto}`)

  fs.symlink(from, to, 'junction', (er)=> {

  })
}

glob.sync(`${nodeModulesPath}/~*`).forEach(p => {
  fs.unlink(p)
})

ln(`${srcPath}/components`, `${nodeModulesPath}/~com`)
ln(`${srcPath}/demo/utils`, `${nodeModulesPath}/~utils`)

