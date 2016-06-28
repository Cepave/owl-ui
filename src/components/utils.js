import OWLUI from './'

export const log = (...args)=> {
  args = ['[OWL-UI]'].concat(args)

  return console.error.apply(console, args)
}

exports.debug = (...args)=> {
  if(OWLUI.config.debug) {
    return log.apply(null, args)
  }
}
