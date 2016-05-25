import React, {Component} from 'react'
import Tip from '~com/tip'
import s from './index.styl'
import {H1, H2, H3, H4, Code, Snippet,
  Quote, List, Table} from '../../components/markdown'

class TipPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <H1>Tip</H1>
        Tip is a <Code>stateless</Code> Component

        <h2>Usage</h2>
        <Snippet src={require('./usage.js.raw')} type="js" />
        
        <H2>Props</H2>
        <Snippet src={require('./props.js.raw')} type="js" />

        <H2>Tip on top</H2>
        <Snippet src={require('./top.html.raw')} type="html" />
        <div>
          <Tip text="tip on top" pos="top">
            <span className={s.dib}>
              Show Tool tip on top
            </span>
          </Tip>
        </div>

        <H2>Tip on right</H2>
        <Snippet src={require('./right.html.raw')} type="html" />
        <div>
          <Tip text="tip on right" pos="right">
            <span className={s.dib}>
              Show Tool tip on right
            </span>
          </Tip>
        </div>

        <H2>Tip on bottom</H2>
        <Snippet src={require('./bottom.html.raw')} type="html" />
        <div>
          <Tip text="tip on bottom" pos="bottom">
            <span className={s.dib}>
              Show Tool tip on bottom
            </span>
          </Tip>
        </div>

        <H2>Tip on left</H2>
        <Snippet src={require('./left.html.raw')} type="html" />
        <div>
          <Tip text="tip on left" pos="left">
            <span className={s.dib}>
              Show Tool tip on left
            </span>
          </Tip>
        </div>
      </div>
    )
  }
}

module.exports = TipPage
