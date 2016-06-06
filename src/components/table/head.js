import React, {PropTypes} from 'react'
import cx from 'classnames'
import s from './table.styl'

TableHead.propTypes = {
  sort: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ])
}

TableHead.defaultProps = {
  sort: '-1',
}

TableHead.displayName = 'TableHead'

function TableHead({className, children, sort, ...props}) {
  const css = {
    [s.sortable]: sort === true || /^(1|0)$/.test(sort)
  }

  return (
    <th className={cx(className, css)} {...props} data-sort={sort}>
      {children}
    </th>
  )
}

module.exports = TableHead
