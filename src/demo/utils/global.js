import isNode from './is-node'
import webpackConf from '../../../webpack.config'

const ROOT = isNode ? global : window

ROOT.__isNode = isNode
ROOT.__isDev = process.env.NODE_ENV !== 'production'
ROOT.__icons = webpackConf.__icons
