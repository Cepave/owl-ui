import React, {PropTypes} from 'react'
import {isDev, repoName} from '../../../webpack.config'
import fs from 'fs'
const icons = fs.readFileSync(`${process.cwd()}/build/dist/owl-icons.svg`)

HTML.propTypes = {}
HTML.defaultProps = {
  html: '',
  initState: {}
}

const linkCSS = ()=> {
  if (!isDev) {
    return <link rel="stylesheet" href={`/${repoName}/demo.css`} />
  }
}

const scriptSrc = ()=> {
  return isDev ? (
    <script dangerouslySetInnerHTML={{__html: `
      ;(function(script){
        script.async = true
        script.src = '//' + location.hostname + ':3001/${repoName}.js'
        document.body.appendChild(script)
      })(document.createElement('script'))
    `}} />
  ) : (
    <script src={`/${repoName}/demo.js`}></script>
  )
}

function HTML({html, initState, ...props}) {
  return (
    <html>
      <head>
        <title>OWL UI Component</title>
        <link rel="icon" href="//light.owl.fastweb.com.cn/statics/icon/favicon.png" />
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,300,200" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,100italic,100,300italic,500,500italic,300,400italic,700,900italic,900,700italic' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="//codemirror.net/theme/neo.css" />
        {linkCSS()}
        <script dangerouslySetInnerHTML={{__html: `
          window.__STATE = ${JSON.stringify(initState)}
        `}} />
      </head>

      <body>
        <div dangerouslySetInnerHTML={{__html: icons}} />
        <div id="app" dangerouslySetInnerHTML={{__html: html}} />
        {scriptSrc()}
      </body>
    </html>
  )
}

module.exports = HTML
