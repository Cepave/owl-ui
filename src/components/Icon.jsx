import React, {PropTypes} from 'react'

Icon.propTypes = {
  link: PropTypes.string.isRequired,
  size: PropTypes.number,
}

Icon.defaultProps = {
  link: '',
  size: 20,
}

function Icon({link, size, ...props}) {
  const style = {
    width: size,
  }
  
  return <svg {...props} style={style} dangerouslySetInnerHTML={{__html: `<use xlink:href="#${link}" />`}} />
}

module.exports = Icon
