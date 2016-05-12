import React, {Children, isValidElement, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'

class Validation extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  componentDidMount() {
    const {children} = this.props
    const x = document.querySelectorAll('[data-valid]')
    console.log(x)
    debugger
    Children.forEach(children, (c, idx)=> {
      console.log(c.type)
//      debugger
    })
  }

  render() {
    const {...props} = this.props
    return (
      <div {...props} />
    )
  }
}


module.exports = {Validation,
  ValidEmail: require('./valid-email'),
//  ValidMobile: require('./valid-mobile'),
}
