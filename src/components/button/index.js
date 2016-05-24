import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const style = require('./button.styl')


class Button extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const {children, className, ...props} = this.props
    return <button className={`${style.btn} ${className}`} {...props}>{children}</button>
  }
}

module.exports = Button
