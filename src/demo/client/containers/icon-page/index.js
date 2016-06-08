import React from 'react'
import s from './icon-page.styl'
import {H1, H2, H3, H4, Code, Snippet,
  Quote, List} from '../../components/markdown'

import Icon from '~com/icon'
import icons from '../../../../../dist/owl-icons.json'

class IconPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  handleFocus(e) {
    let _target = e.target
    while (!_target.classList.contains(s.iconBox)) {
      _target = _target.parentNode
    }
    const sel = window.getSelection()
    const range = document.createRange()

    range.selectNode(_target.querySelector(`.${s.iconID}`))
    sel.removeAllRanges()
    sel.addRange(range)
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        ddd: false
      })
    }, 5000)
  }


  render() {
    return (
      <div>
        <H1>Icon</H1>
        <H2>Props</H2>

        <H2>Demo</H2>
        <div onFocus={this.handleFocus}>
          {icons.map((id, i)=> {
            return (
              <div className={s.iconBox} tabIndex={i+1}>
                <Icon type={id} size={25} />
                <div className={s.iconID}>
                  {id}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

module.exports = IconPage
