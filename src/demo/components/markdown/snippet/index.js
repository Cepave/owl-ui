import React from 'react'
import {findDOMNode} from 'react-dom'
import s from './snippet.styl'

const typeMap = {
  js: 'javascript',
  html: 'htmlmixed'
}
class Code extends React.Component {
  static propTypes = {}

  static defaultProps = {
    src: '',
    type: 'js',
  }

  componentDidMount() {
    this.renderCode()
    const Clipboard = require('clipboard')
    new Clipboard(this.refs.copyBtn)
      .on('success', ()=> {
        alert('copied')
      })
  }

  renderCode() {
    const {src, type} = this.props
    const CodeMirror = require('codemirror')
    require('codemirror/addon/runmode/runmode')
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/css/css')
    require('codemirror/mode/htmlmixed/htmlmixed')
    require('codemirror/mode/xml/xml')

    CodeMirror.runMode(src, typeMap[type] || type, this.refs.output)
  }

  shouldComponentUpdate({nsrc, ntype, ...newProps}) {
    const {src, type} = this.props
    return nsrc !== src || ntype !== type
  }

  render() {
    const {type, src, ...props} = this.props

    return (
      <div {...props} className={s.code}>
        <div className={s.copyBtn} ref="copyBtn" data-clipboard-text={src}>copy</div>
        <pre ref="output" className="cm-s-neo"/>
      </div>
    )
  }
}

module.exports = Code
