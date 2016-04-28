import React from 'react'
import {findDOMNode} from 'react-dom'
import s from './Code.styl'

class Code extends React.Component {
  static propTypes = {}

  static defaultProps = {
    src: '',
    type: 'js',
  }

  hljs = require('highlight.js')
  componentDidMount() {
    this.hljs.configure({
      tabReplace: '  '
    })
    
    this.renderCode()
    const Clipboard = require('clipboard')
    new Clipboard(this.refs.copyBtn)
      .on('success', ()=> {
        alert('copied')
      })
  }

  renderCode() {
    this.hljs.highlightBlock(findDOMNode(this.refs.pre))
  }

  shouldComponentUpdate({nsrc, ntype, ...newProps}) {
    const {src, type} = this.props
    return nsrc !== src || ntype !== type
  }

  componentDidUpdate() {
    this.renderCode()
  }

  render() {
    const {type, ...props} = this.props
    const src = props.src.replace(/</g, '&lt;')

    return (
      <div {...props} className={s.code}>
        <div className={s.copyBtn} ref="copyBtn" data-clipboard-text={props.src}>copy</div>
        <pre ref="pre">
          <code className={type} dangerouslySetInnerHTML={{__html: src}} />
        </pre>
      </div>
    )
  }
}

module.exports = Code
