import React, {Component, PropTypes} from 'react'

const style = require('./button.styl')


class Button extends Component {

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
