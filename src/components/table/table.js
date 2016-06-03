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

  state = {
    theadHeight: 0,
    ths: [],
    trs: [],
  }

  sort(e, {idx, isSortable, ...props}) {
    if (!isSortable) {
      return
    }
    const {ths, trs} = this.state

    this.setState({
      ths: ths.map((th, i)=> {
        const {children} = th
        const sort = children.props.sort
        const newSort = i === idx ? (sort === '1' ? '0' : '1' ) : '-1'

        th.children = cloneElement(children, {
          ...children.props,
          sort: newSort,
        })

        return th
      }),

      trs: trs.sort((a, b)=> {
        const sort = ths[idx].children.props.sort
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
      }),
    })
  }

  componentWillMount() {
    const children = flatten(this.props.children)

    const data = children.reduce((data, c, idx)=> {
      if (c.type === 'tr') {
        data.trs.push({
          children: c,
          tds: c.props.children.map(cc => textContent(cc))
        })
      } else { // TableHead
        const {isSortable} = c.props
        const props = {
          ...c.props,
          idx,
          onClick: isSortable ? e => ::this.sort(e, props) : undefined,
        }
        data.ths.push({
          idx,
          isSortable,
          children: cloneElement(c, props),
        })
      }

      return data
    }, {ths: [], trs: []})

    this.state = {
      ...this.state,
      ...data,
    }
  }

  renderTable() {
    const {ths, trs} = this.state

    const table = (
      <table>
        <thead ref="thead"><tr>{ths.map(th => th.children)}</tr></thead>
        <tbody ref="tbody">{trs.map(tr => tr.children)}</tbody>
      </table>
    )

    return table
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        theadHeight: this.refs.thead.offsetHeight + 1
      })
    })
  }

  render() {
    const {className, height, ...props} = this.props
    const {theadHeight} = this.state
    const table = this.renderTable()

    const tbodyCSS  = {
      [s.thHide]: !!theadHeight
    }
    return (
      <div className={cx(s.tableBox, className)} {...props}>
        <div className={s.thead} style={{height: theadHeight}}>
          {table}
        </div>
        <div className={cx(s.tbody, tbodyCSS)} style={{maxHeight: height}}>
          {table}
        </div>
      </div>
    )
  }
}

module.exports = Table
