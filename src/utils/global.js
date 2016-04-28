import isNode from './isNode'

const ROOT = isNode ? global : window

if (isNode) {
  ROOT.__isNode = true
}
