import React, {createElement} from 'react'

Head.propTypes = {}
Head.defaultProps = {}

function Head({children, tagName, ...props}) {
  const anchor = children.trim().toLocaleLowerCase().replace(/\s/g, '-')
  return createElement(
    tagName,
    props,
    createElement(
      "a",
      { name: anchor, href: "#" + anchor },
      children
    )
  )
}

module.exports = Head
