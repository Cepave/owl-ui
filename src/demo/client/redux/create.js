import { createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const devTool = ()=> {
  return typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
}

const middlewares = compose(
  applyMiddleware(thunk),
  devTool(),
)

module.exports = (state = {})=> {
  return createStore(reducers, state, middlewares)
}
