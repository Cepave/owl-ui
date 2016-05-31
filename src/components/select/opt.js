import React, {PropTypes} from 'react'
import css from 'classnames'
import s from './select.styl'

Opt.propTypes = {}
Opt.defaultProps = {}

function Opt({className, ...props}) {
  return (
    <div {...props} className={css(className, s.options)}/>
  )
}

module.exports = Opt
