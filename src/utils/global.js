import isNode from './isNode'

const ROOT = isNode ? global : window

ROOT.__isNode = isNode
ROOT.__isDev = process.env.NODE_ENV !== 'production'
