import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './app'
import IconPage from './icon-page'
import CheckBoxPage from './checkbox-page'
import TipPage from './tip-page'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="icon" component={IconPage} />
      <Route path="tip" component={TipPage} />
      <Route path="checkbox" component={CheckBoxPage} />
    </Route>
  </Router>
)
