import React, {PropTypes} from 'react'
import s from './list.styl'

List.propTypes = {}
List.defaultProps = {}

function List({...props}) {
  return (
    <div {...props} className={s.list}/>
  )
}

module.exports = List
