import React, {PropTypes, cloneElement} from 'react'
import {findDOMNode} from 'react-dom'
import cx from 'classnames'
import s from './table.styl'
import flatten from 'lodash.flatten'
import textContent from 'react-addons-text-content'

class Table extends React.Component {
  static propTypes = {
    height: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string
    ])
  }

  static defaultProps = {
    height: 'auto'
  }

  isSorting = false
  state = {
    theadHeight: 0,
    isSorting: false,
    ths: [],
    trs: [],
  }

  handleSort(e, {idx, ...props}) {
    const {ths, trs} = this.state
    const defaultSort = ths[idx].children.props.sort

    this.isSorting = true
    this.setState({
      ths: ths.map((th, i)=> {
        const {children} = th
        const sort = children.props.sort
        const isSortable = sort === true || /^(1|0)$/.test(sort)

        const newSort = i === idx ? (sort === '1' ? '0' : '1' ) : isSortable

        th.children = cloneElement(children, {
          ...children.props,
          sort: newSort,
        })

        return th
      }),

      trs: /^(1|0)$/.test(defaultSort) ? trs.reverse() : this.sort(idx),
    })
  }

  sort(idx) {
    const {trs, ths} = this.state
    const sort = ths[idx].children.props.sort

    return trs.sort((a, b)=> {
      a = a.tds[idx]
      b = b.tds[idx]
      const isNumber = !isNaN(b) && !isNaN(a)

      if (sort === '1') {
        if (isNumber) {
          return b - a
        } else {
          return b.localeCompare(a)
        }
      } else {
        if (isNumber) {
          return a - b
        } else {
          return a.localeCompare(b)
        }
      }
    })
  }

  getRows() {
    const children = flatten(this.props.children)
    let startSortIdx

    const data = children.reduce((data, c, idx)=> {
      if (c.type === 'tr') {
        data.trs.push({
          children: c,
          tds: c.props.children.map(cc => textContent(cc))
        })
      } else { // TableHead
        const {sort} = c.props
        const hasSort = /^(1|0)$/.test(sort)
        const isSortable = sort === true || hasSort

        const props = {
          ...c.props,
          idx,
          onClick: isSortable ? e => ::this.handleSort(e, props) : undefined,
        }
        data.ths.push({
          idx,
          children: cloneElement(c, props),
        })

        if (hasSort) {
          startSortIdx = idx
        }
      }

      return data
    }, {ths: [], trs: []})

    this.state = {
      ...this.state,
      ...data,
    }

    if (startSortIdx !== undefined) {
      this.sort(startSortIdx)
    }

    return data
  }

  render() {
    const { className, ...props } = this.props

    if (!this.isSorting) {
      this.getRows()
    }

    const { trs, ths } = this.state
    return (
      <table className={cx(s.table, className)}>
        <thead ref="thead"><tr>{ths.map(th => th.children)}</tr></thead>
        <tbody ref="tbody">{trs.map(tr => tr.children)}</tbody>
      </table>
    )
  }

  componentDidUpdate() {
    this.isSorting = false
  }
}

module.exports = Table
