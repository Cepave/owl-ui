import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './App.jsx'
import IconPage from './IconPage'
import CheckBoxPage from './CheckBoxPage'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="icon" component={IconPage} />
      <Route path="checkbox" component={CheckBoxPage} />
    </Route>
  </Router>
)
