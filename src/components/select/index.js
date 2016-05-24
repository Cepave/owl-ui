import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import s from './select.styl'
import {Div} from 'react-tag'

class Select extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    isDisabled: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
    ]),
  }

  static defaultProps = {
    options: [],
    isDisabled: false,
    onChange() {}
  }

  state = {
    isOpen: false,
    title: '',
  }

  componentWillMount() {
    const {options} = this.props

    this._options = options.reduce((pv, cv)=> {
      const {label, value, selected} = cv
      pv[value] = {
        label, value
      }
      if (selected) {
        this._value = value
      }
      return pv
    }, {})

    if (this._value === undefined) {
      this._value = options[0].value
    }
  }

  renderOptions() {
    const {options} = this.props
    return options.map((option, idx) => {
      const {label, value} = option
      return (
        <div
          key={value}
          onClick={(e)=>::this.onChange(e, option)}
          className={s.options}>
          {label}
        </div>
      )
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

  onChange = (e, option)=> {
    e.stopPropagation()
    const {label, value} = option

    if (value !== this._value) {
      this._value = value
      this.props.onChange(e, {value})
    }

    this.setState({
      isOpen: false,
      title: label
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
      props: {options, isDisabled, ...props},
      _options, _value
    } = this

    const css = {
      [s.selectOpen]: isOpen,
      [s.disabled]: isDisabled
    }

    const _title = title || _options[_value].label

    return (
      <Div
        {...props}
        className={`${s.select}`}
        css={css}
        onBlur={this.onBlur}
        tabIndex="-1"
      >
        <div className={s.title} onClick={this.toggleMenu}>
          <div> {_title}</div>
          <div className={s.titleRight}>
            <div className={s.arrow}></div>
          </div>
        </div>
        <Div className={s.optionBox} show={isOpen}>
          {this.renderOptions()}
        </Div>
      </Div>
    )
  }
}

module.exports = Select
