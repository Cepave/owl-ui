import React, {PropTypes, cloneElement} from 'react'
import {findDOMNode} from 'react-dom'
import s from './select.styl'
import cx from 'classnames'

class Select extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    isDisabled: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    isDisabled: false,
    onChange() {}
  }

  state = {
    isOpen: false,
    title: '',
  }

  _setState = (...args) => {
    this._isSetState = true

    return this.setState.apply(this, args)
  }

  onBlur = (e)=> {
    this._setState({
      isOpen: false
    })
  }

  onChange = (e, child)=> {
    e.stopPropagation()
    const {value, children} = child.props

    if (value !== this.value) {
      this.value = value
      this.props.onChange(e, {value})
    }

    this._setState({
      isOpen: false,
      title: children
    })
  }

  toggleMenu = (e) => {
    e.stopPropagation()
    if (this.props.isDisabled) {
      return
    }

    this._setState({
      isOpen: !this.state.isOpen
    })
  }

  findSelected() {
    const {children} = this.props
    return children.find(c => c.props.isSelected) || children[0]
  }

  renderOptions() {
    const {children} = this.props

    return children.map(c => {
      const {value, ...props} = c.props
      return cloneElement(c, {
        key: value,
        onClick: e => ::this.onChange(e, c),
        ...props,
      })
    })
  }

  render() {
    const {
      state: {isOpen},
      props: {isDisabled, className, ...props},
    } = this

    const selectCSS = {
      [s.selectOpen]: isOpen,
      [s.disabled]: isDisabled
    }

    if (!this._isSetState) {
      const selectedChild = this.findSelected()
      this.state.title = selectedChild.props.children
      this.value = selectedChild.props.value
    }
    let { title, } = this.state

    return (
      <div
        className={cx(s.select, className, selectCSS)}
        onBlur={this.onBlur}
        tabIndex="-1"
        {...props}
      >
        <div className={s.title} onClick={this.toggleMenu}>
          <div className={s.titleText}>{title}</div>
          <div className={s.titleRight}>
            <div className={s.arrow}></div>
          </div>
        </div>
        <div className={s.optionBox}>
          {this.renderOptions()}
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    const select = findDOMNode(this)
    const {isOpen} = this.state

    if (isOpen) {
      select.focus()
    }

    this._isSetState = false
  }

}

module.exports = Select
