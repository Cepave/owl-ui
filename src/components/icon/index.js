import React, {PropTypes} from 'react'
const {oneOfType, string, number} = PropTypes

Icon.propTypes = {
  type: string,
  size: oneOfType(string, number),
}

Icon.defaultProps = {
  type: 'add',
  size: 16
}

function Icon({type, size, ...props}) {
  props.dangerouslySetInnerHTML = {
    __html: `<use xlink:href="#${type}" />`
  }

  const hasHeight = /x\d/.test(size)

  if (hasHeight) {
    const [w, h] = size.split('x')
    props.width = +w
    props.height = +h
  } else {
    props.width = +size
    props.height = props.width
  }

  return (
    <svg {...props} />
  )
}

module.exports = Icon
