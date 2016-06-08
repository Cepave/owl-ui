import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Action from '../actions'
import {Link, browserHistory} from 'react-router'
import Nav from './nav'
import cx from 'classnames'
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
          <div className={s.hrow}>
            <h1>OWL UI</h1>
            <span className="monospace">&lt;Component /></span>
          </div>

          <div className={cx(s.badges, s.hrow)}>
            <a href="https://travis-ci.org/Cepave/owl-ui">
              <img src="https://img.shields.io/travis/Cepave/owl-ui.svg" />
            </a>
            <a href="https://coveralls.io/github/Cepave/owl-ui">
              <img src="https://img.shields.io/coveralls/Cepave/owl-ui/dev.svg" />
            </a>
            <a href="https://github.com/cepave/owl-ui">
              <img src="https://img.shields.io/github/stars/Cepave/owl-ui.svg?style=social&label=Stars"/>
            </a>
          </div>
          <div className={s.hrow}>
            <a href="https://github.com/cepave/owl-ui">
              <span className={s.ghostBtn}>View on GitHub</span>
            </a>
          </div>
        </header>

        <div className="fbox-content">
          <Nav app={rootState.app} />
          <section className="doc-content">
            {children}
          </section>
        </div>

        <footer>
          Cepave Inc.
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
