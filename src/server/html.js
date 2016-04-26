import React from 'react'
import renderHTML from './renderHTML'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {match, RouterContext} from 'react-router'
import createStore from '../demo/redux/create'
import routes from '../demo/containers/routes.jsx'

module.exports = (req, res, next)=> {
  const initState = {
    app: {
      url: req.url
    }
  }
  const store = createStore(initState)

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const html = renderToString(
        <Provider store={store}>
          <RouterContext  {...renderProps} />
        </Provider>
      )
      res.status(200).send(renderHTML({
        html,
        state: initState
      }))
    } else {
      res.status(404).send('Not found')
    }
  })
}
