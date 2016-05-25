import isNode from './is-node'

const ROOT = isNode ? global : window

ROOT.__isNode = isNode
ROOT.__isDev = process.env.NODE_ENV !== 'production'
