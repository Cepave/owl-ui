class OWLUI {
  constructor() {
    this.config = {
      debug: false
    }
  }

  Button = require('./button')
  Tab = require('./tab')
  Select = require('./select')
  Select2 = require('./select2')
  Tip = require('./tip')
  Table = require('./table')

  set (key, val) {
    if (typeof key === 'string') {
      this.config[key] = val
    } else {
      this.config = {
        ...this.config,
        ...key
      }
    }

    return this
  }
}

module.exports = new OWLUI
