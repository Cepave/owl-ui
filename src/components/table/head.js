import React, {PropTypes} from 'react'
import cx from 'classnames'
import s from './table.styl'

TableHead.propTypes = {}
TableHead.defaultProps = {
  sort: '-1'
}
TableHead.displayName = 'TableHead'

function TableHead({isSortable, className, children, sort, ...props}) {
  const css = {[s.sortable]: isSortable}

  return (
    <th className={cx(className, css)} {...props} data-sort={sort}>
      {children}
    </th>
  )
}

module.exports = TableHead
