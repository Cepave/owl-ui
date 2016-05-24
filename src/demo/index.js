import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from './redux/create'
import routes from './containers/routes'

const store = createStore(window.__STATE)

if (__isDev) {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React, {
    exclude: [/Connect/, /^App$/]
  })
}

render(
  <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('app'))
