module.exports = (app = {
  msg: 'hello world'
}, act)=> {

  const action = {
    appRouteTo() {
      app.url = act.path
      
      return app
    }

  }[act.type]

  return action ? action() : app
}
