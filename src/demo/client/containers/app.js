import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Action from '../actions'
import Nav from './nav'
import cx from 'classnames'
import s from './app.styl'

class App extends Component {
  static propTypes = {}

  static defaultProps = {}

  componentDidMount() {
    const {action, rootState} = this.props

    const {nav} = this.refs
    let hasOver = false, _nav

    window.addEventListener('scroll', ()=> {
      const otop = hasOver ? _nav.offsetTop : nav.offsetTop
      if (window.scrollY >= otop - 16) {
        if (!hasOver) {
          _nav = nav.cloneNode(true)

          nav.style.top = `${0 + 16}px`
          nav.style.left = `${nav.offsetLeft}px`
          nav.style.position = 'fixed'
          _nav.style.visibility = 'hidden'

          nav.parentNode.insertBefore(_nav, nav)
        }
        hasOver = true
      } else {
        if (hasOver && nav.parentNode) {
          nav.style.position = ''
          nav.style.left = ''
          nav.style.top = ''

          nav.parentNode.removeChild(_nav)
        }
        hasOver = false
      }
    }, false)
  }

  render() {
    const {action, rootState, children, ...props} = this.props

    const content = children ? children : require('./change-log')
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
            <a href="//github.com/cepave/owl-ui" style={{marginRight: 20}}>
              <span className={s.ghostBtn}>Fork Me On GitHub</span>
            </a>
          </div>
        </header>

        <div className="fbox-content">
          <div ref="nav" data-role="nav">
            <Nav app={rootState.app} />
          </div>
          <section className="doc-content">
            {content}
          </section>
        </div>

        <footer>
           Copyright © 2016 <a href="//cepave.com">Cepave</a> Inc.
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
