import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './app'
import ButtonPage from './button-page'
import IconPage from './icon-page'
import CheckBoxPage from './checkbox-page'
import TipPage from './tip-page'
import SelectPage from './select-page'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="button" component={ButtonPage} />
      <Route path="icon" component={IconPage} />
      <Route path="select" component={SelectPage} />
      <Route path="tip" component={TipPage} />
      <Route path="checkbox" component={CheckBoxPage} />
    </Route>
  </Router>
)
