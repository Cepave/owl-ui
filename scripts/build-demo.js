'use strict'

import '~utils/global'
import '../src/demo/server/require-hooks'

import webpack from 'webpack'
import webConf from '../webpack.config'
import fs from 'fs'
import {mkdir, rm} from 'shelljs'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import c from 'chalk'
import routes from '../src/demo/client/containers/routes'
import HTML from '../src/demo/server/html'
import createStore from '../src/demo/client/redux/create'

const cwd = process.cwd()

function crawlChildren(Router) {
  const res = {}

  const crawl = (Router, parent)=> {
    const {path, component, children} = Router.props
    if (path) {
      if (parent) {
        const parentPath = parent.props.path || ''
        const pp = `/${parentPath}/${path}`.replace(/\/+/g, '/')
        res[pp] = component
      } else {
        res[path] = component
      }
    }

    if (children) {
      if (Array.isArray(children)) {
        children.forEach((child)=> {
          crawl(child, Router)
        })
      } else {
        crawl(children, Router)
      }
    }
  }
  crawl(Router)
  return res
}

const getRoutes = crawlChildren(routes)

rm('-r', ['demo'])
webpack(webConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true
  }))

  Object.keys(getRoutes).forEach(p => {
    const PageComponent  = (getRoutes[p])

    const initState = {
      app: {
        url: p
      }
    }

    const store = createStore(initState)
    const html = renderToString(
      <Provider store={store}>
        <PageComponent />
      </Provider>
    )
    const props = {
      html, initState
    }

    const pageHTML = `<!DOCTYPE html>${renderToString(<HTML {...props} />)}`

    mkdir('-p', [`./demo${p}`])
    const index = `./demo${p}/index.html`
    fs.writeFile(index, pageHTML, (er)=> {
      if (er) {
        console.log(er)
      }
      console.log(`Writing file: ${c.yellow(index)}`)
    })
  })
})

