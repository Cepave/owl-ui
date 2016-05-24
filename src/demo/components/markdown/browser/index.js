import React, {PropTypes} from 'react'
import {Span} from 'react-tag'
import s from './browser.styl'

Browser.propTypes = {}
Browser.defaultProps = {}

function Browser({logo, ...props}) {
  const css = {
    [s.browser]: true,
    [s[logo]]: true
  }
  return (
    <Span {...props} css={css} title={logo}/>
  )
}

module.exports = Browser
