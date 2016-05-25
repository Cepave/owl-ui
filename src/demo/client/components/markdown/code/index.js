import React, {PropTypes} from 'react'
import s from './code.styl'
Code.propTypes = {}
Code.defaultProps = {}

function Code({...props}) {
  return (
    <span {...props} className={s.code} />
  )
}

module.exports = Code
