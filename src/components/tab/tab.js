import React, {PropTypes, cloneElement} from 'react'
import s from './tab.styl'
import cx from 'classnames'
import delegate from 'delegate-to'

class Tab extends React.Component {
  static propTypes = {
    hasHash: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    hasHash: false,
    onChange(){}
  }

  state = {

  }

  findSelected() {
    const {children} = this.props

    const findChild = children.find(c => c.props.isSelected)
    return findChild && findChild.props.name || children[0].props.name
  }

  clickTab = (e) => {
    e.stopPropagation()
    const {delegateTarget} = e
    const {selected} = this.state
    const {hasHash, onChange} = this.props
    const name = delegateTarget.getAttribute('name')

    if (selected === name) {
      return
    }

    this.setState({
      selected: name
    })
    onChange(e, {name})

    if (hasHash) {
      window.history.pushState(null, '', `#${name}`)
    }
  }

  setChildren() {
    const {children} = this.props
    const {selected} = this.state

    return children.reduce((pv, c)=> {
      const {name} = c.props
      const {displayName} = c.type

      pv[displayName].push(cloneElement(c, {
        ...c.props,
        key: name,
        isSelected: selected === name
      }))

      return pv
    }, {'TabHead': [], 'TabContent': []})
  }

  componentWillMount(){
    this.state.selected = this.findSelected()
  }

  render() {
    const {className, ...props} = this.props
    const {TabHead, TabContent} = this.setChildren()

    return (
      <div className={cx(s.tab, className)} {...props}>
        <div data-role="tab-head" onClick={delegate('[data-role="tab-head-head"]', this.clickTab)}>
          {TabHead}
        </div>
        <div data-role="tab-content">
          {TabContent}
        </div>
      </div>
    )
  }

  componentDidMount() {
    const {hasHash} = this.props
    if (hasHash) {
      const hash = window.location.hash.slice(1)
      if (hash) {
        this.setState({
          selected: hash
        })
      }
    }
  }

}

module.exports = Tab
