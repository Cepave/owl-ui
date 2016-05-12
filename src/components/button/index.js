import React, {Component, PropTypes} from 'react'

Button.propTypes = {
  className: React.PropTypes.string,
  text: React.PropTypes.string
}

Button.defaultProps = {
  className: ''
}

function Button({className, text, ...props}) {

  return <button className={`btn ${className}`} {...props}>{text}</button>
}

module.exports = Button
