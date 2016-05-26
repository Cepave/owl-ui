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
    color: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    className: '',
    color: 'primary',
    size: 'default'
  }

  render() {
    const {children, className, color, size, ...props} = this.props
    return (
      <button
        className={`${style.btn} ${className}`}
        data-color={`${color}`}
        data-size={`${size}`}
        {...props}
      >
        {children}
      </button>
    )
  }
}

module.exports = Button
