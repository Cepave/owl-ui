import React, {PropTypes, cloneElement} from 'react'
import {findDOMNode} from 'react-dom'
import s from './select.styl'
import css from 'classnames'

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

  findSelected() {
    const {children} = this.props
    return children.find(c => c.props.isSelected) || children[0]
  }

  componentWillMount() {
    const selectedChild = this.findSelected()
    this._value = selectedChild.props.value
    this._title = selectedChild.props.children
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

  shouldComponentUpdate({}, {}) {
    return true
  }

  componentDidUpdate() {
    const select = findDOMNode(this)
    const {isOpen} = this.state

    if (isOpen) {
      select.focus()
    }
  }

  onBlur = (e)=> {
    this.setState({
      isOpen: false
    })
  }

  onChange = (e, child)=> {
    e.stopPropagation()
    const {value, children} = child.props

    if (value !== this._value) {
      this._value = value
      this.props.onChange(e, {value})
    }

    this.setState({
      isOpen: false,
      title: children
    })
  }

  toggleMenu = (e) => {
    e.stopPropagation()
    if (this.props.isDisabled) {
      return
    }
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      state: {isOpen, title},
      props: {isDisabled, className, ...props},
    } = this

    const selectCSS = {
      [s.selectOpen]: isOpen,
      [s.disabled]: isDisabled
    }

    return (
      <div
        className={css(s.select, className, selectCSS)}
        onBlur={this.onBlur}
        tabIndex="-1"
        {...props}
      >
        <div className={s.title} onClick={this.toggleMenu}>
          <div>{title || this._title}</div>
          <div className={s.titleRight}>
            <div className={s.arrow}></div>
          </div>
        </div>
        <div className={s.optionBox} hidden={!isOpen}>
          {this.renderOptions()}
        </div>
      </div>
    )
  }
}

module.exports = Select
