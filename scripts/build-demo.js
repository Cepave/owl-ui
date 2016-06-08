'use strict'

import '~utils/global'
import '../src/demo/server/require-hooks'

import gu from 'gulp'
import webpack from 'webpack'
import webConf, {repoName} from '../webpack.config'
import fs from 'fs'
import {mkdir, rm} from 'shelljs'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {match, RouterContext} from 'react-router'
import c from 'chalk'
import routes from '../src/demo/client/containers/routes'
import HTML from '../src/demo/server/html'
import createStore from '../src/demo/client/redux/create'
import del from 'del'
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

del.sync(['!demo/.git', 'demo/*'])
webpack(webConf, (er, stats)=> {
  console.log(stats.toString({
    colors: true
  }))

  Object.keys(getRoutes).forEach(p => {
    const initState = {
      app: {
        ...require('../src/conf'),
        url: p
      }
    }
    const store = createStore(initState)
    mkdir('-p', [`./demo${p}`])

    match({ routes, location: p }, (error, redirectLocation, renderProps) => {
      const props = {
        html: renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ),
        initState,
      }
      const pageHTML = `<!DOCTYPE html>${renderToString(<HTML {...props} />)}`
      const index = `./demo${p}/index.html`
      fs.writeFile(index, pageHTML, (er)=> {
        if (er) {
          console.log(er)
        }
        console.log(`Writing file: ${c.yellow(index)}`)
      })
    })
  })

  setTimeout(()=> {
    gu.src(`demo/${repoName}/**`)
      .pipe(gu.dest('demo'))
      .on('finish', ()=> {
        del(`demo/${repoName}`)
      })
  }, 1000)
})

