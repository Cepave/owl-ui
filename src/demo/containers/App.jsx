import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Action from '../actions'
import {Link, browserHistory} from 'react-router'

class App extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const {action, rootState, children, ...props} = this.props

    return (
      <div>
        hello 11
        {children}
        world 22
        <div>
          <Link to="/icon"> go to /icon</Link>
        </div>
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
