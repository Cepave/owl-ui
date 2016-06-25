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

  onBlur = (e)=> {
    this.setState({
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

  findSelected({children} = this.props) {
    return (children.find(c => c.props.isSelected) || children[0]).props
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

  componentWillMount(newProps = this.props) {
    const {children, value} = this.findSelected(newProps)

    this.state.title = children
    this.value = value
  }

  shouldComponentUpdate(newProps, newState) {
    const {props, state} = this

    return props.isDisabled !== newProps.isDisabled ||
        props.children !== newProps.children ||
        state.isOpen !== newState.isOpen ||
        state.title !== newState.title
  }

  componentWillUpdate(newProps, newState) {
    const {props, state} = this
    if (props.children !== newProps.children) {
      this.componentWillMount(newProps)
    }
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
  }

}

module.exports = Select
