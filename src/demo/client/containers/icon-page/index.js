import React from 'react'
import s from './icon-page.styl'
import {H1, H2, H3, H4, Code, Snippet,
  Quote, List} from '../../components/markdown'

import Icon from '~com/icon'
import delegate from 'delegate-to'

class IconPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  handleHover(e) {
    const {delegateTarget} = e

    const sel = window.getSelection()
    const range = document.createRange()

    range.selectNode(delegateTarget.querySelector(`.${s.iconID}`))
    sel.removeAllRanges()
    sel.addRange(range)
  }

  render() {
    return (
      <div>
        <H1>Icon</H1>
        <H2>Props</H2>
        <Snippet type="js" src={require('./props.js.raw')} />

        <H2>Usage</H2>
        <Snippet type="js" src={require('./usage.js.raw')} />

        <H2>Colorful</H2>
        <p>The Icon component export as a standard svg tag, you can <Code>fill</Code> the color free</p>
        <Snippet type="html" src={require('./fill.html.raw')} />
        <Icon fill="#e08600" type="alarm" size={45} />

        <H2>Demo</H2>
        <div onMouseOver={delegate(`.${s.iconBox}`, this.handleHover)}>
          {__icons.map((id, i)=> {
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
