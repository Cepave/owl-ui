import React, {PropTypes} from 'react'

TabHead.propTypes = {
  name: PropTypes.string.isRequired,
}
TabHead.defaultProps = {
  isSelected: false,
  name: ''
}
TabHead.displayName = 'TabHead'

function TabHead({isSelected, ...props}) {
  const selected = isSelected ? 1 : 0
  return (
    <div {...props} data-selected={selected} />
  )
}

module.exports = TabHead
