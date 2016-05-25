import React, {PropTypes} from 'react'
import s from './quote.styl'
Quote.propTypes = {}
Quote.defaultProps = {}

function Quote({...props}) {
  return (
    <blockquote {...props} className={s.quote}/>
  )
}

module.exports = Quote
