import React, {PropTypes} from 'react'

TabContent.propTypes = {
  name: PropTypes.string.isRequired,
}
TabContent.defaultProps = {
  isSelected: false,
  name: ''
}
TabContent.displayName = 'TabContent'

function TabContent({isSelected, ...props}) {
  const selected = isSelected ? 1 : 0
  return (
    <div {...props} data-selected={selected} />
  )
}
module.exports = TabContent
