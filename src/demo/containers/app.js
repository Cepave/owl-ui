import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Action from '../actions'
import {Link, browserHistory} from 'react-router'
import Nav from './nav'

import s from './app.styl'

class App extends Component {
  static propTypes = {}

  static defaultProps = {}

  componentDidMount() {
    const {action, rootState} = this.props
  }

  render() {
    const {action, rootState, children, ...props} = this.props

    return (
      <div>
        <header>
          <h1>
            <img className="owl-logo" src="http://157.122.99.72/statics/icon/favicon.png"/>WL UI
          </h1>
          <span className="monospace">&lt;Component /></span>
        </header>

        <div className="fbox-content">
          <Nav app={rootState.app} />
          <section className="doc-content">
            {children}
          </section>
        </div>

        <footer>
          We're hiring
        </footer>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {rootState: state}
}

function mapDispatchToProps(dispatch) {
  return {action: bindActionCreators(Action, dispatch)}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)
