require('babel-core/register')
import webpack from 'webpack'
import webpackConf from '../webpack.config'

require('~utils/global')
require('../src/server/require-hooks')

const routes = require('../src/demo/containers/routes')

function crawlChildren(Router) {
  const res = {}

  const crawl = (Router, parent)=> {
    const {path, component, children} = Router.props
    if (path) {
      if (parent) {
        const parentPath = parent.props.path || ''
        res[`${parentPath}${path}`] = component
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

console.log(crawlChildren(routes))
