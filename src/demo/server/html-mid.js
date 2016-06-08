import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {match, RouterContext} from 'react-router'
import createStore from '../client/redux/create'
import routes from '../client/containers/routes'
import HTML from './html'

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

      const props = {
        html: renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ),
        initState,
      }

      res.status(200).send(
        `<!DOCTYPE html>${renderToString(<HTML {...props} />)}`
      )
    } else {
      res.status(404).send('Not found')
    }
  })
}
