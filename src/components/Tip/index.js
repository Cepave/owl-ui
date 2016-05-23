import React, {PropTypes} from 'react'

const s = require('./tip.styl')

Tip.propTypes = {
  text: PropTypes.string.isRequired,
  pos: PropTypes.string,
}

Tip.defaultProps = {
  text: '',
  pos: 'top'
}

function Tip({text, pos, ...props}) {
  return (
    <div {...props} data-pos={pos} data-text={text} className={s.tip} />
  )
}

module.exports = Tip
