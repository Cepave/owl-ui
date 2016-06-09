import React, {PropTypes, cloneElement} from 'react'
import s from './tab.styl'
import css from 'classnames'
class Tab extends React.Component {
  static propTypes = {}

  static defaultProps = {

  }

  state = {}

  componentWillMount(){
    this.state.selected = this.findSelected()
  }

  findSelected() {
    const {children} = this.props

    const findChild = children.find(c => c.props.isSelected)
    return findChild && findChild.props.name || children[0].props.name
  }

  clickTab = (e) => {
    e.stopPropagation()
    let _head = e.target

    while (_head.dataset.role !== 'tab-head-head') {
      _head = _head.parentNode
    }
    const name = _head.getAttribute('name')
    const {selected} = this.state

    if (selected === name) {
      return
    }

    this.setState({
      selected: name
    })
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

  render() {
    const {className, ...props} = this.props
    const {TabHead, TabContent} = this.setChildren()
    return (
      <div className={css(s.tab, className)} {...props}>
        <div data-role="tab-head" onClick={this.clickTab}>
          {TabHead}
        </div>
        <div data-role="tab-content">
          {TabContent}
        </div>
      </div>
    )
  }
}

module.exports = Tab
