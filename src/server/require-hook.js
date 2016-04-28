import Module from 'module'
import path from 'path'
import fs from 'fs'

const _require = Module.prototype.require
const requireHook = function(context, modulePath) {
  return _require.call(context, modulePath)
}

module.exports = (opts = {})=> {
  Module.prototype.require = function(modulePath) {
    const ext = path.extname(modulePath)
    const {filename} = this

    return opts[ext]
      ? opts[ext]({
          filename,
          modulePath,
          body: fs.readFileSync(path.join(filename, '../', modulePath)).toString(),

        })
      : requireHook(this, modulePath)
  }
}
