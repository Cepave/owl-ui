import React, {Component} from 'react'
import Tip from '~com/tip'
import s from './index.styl'
import {Validation, ValidEmail} from '~com/validation'

class TipPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  submitTest = (e)=> {

  }

  render() {
    return (
      <div>
        <Validation onSubmit={this.submitTest}>
          <a>test</a>
          <div>
            <ValidEmail name="email" regex={/.+@.+/} />
          </div>
          <b>bbb</b>
        </Validation>

        <h1>Tip Page</h1>
        <div>
          <Tip text="tip on top" pos="top">
            <span className={s.dib}>
              Show Tool tip on top
            </span>
          </Tip>
        </div>

        <div>
          <Tip text="tip on right" pos="right">
            <span className={s.dib}>
              Show Tool tip on right
            </span>
          </Tip>
        </div>

        <div>
          <Tip text="tip on right" pos="bottom">
            <span className={s.dib}>
              Show Tool tip on bottom
            </span>
          </Tip>
        </div>

        <div>
          <Tip text="tip on right" pos="left">
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
