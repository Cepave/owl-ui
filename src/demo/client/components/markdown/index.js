import React from 'react'
import Head from './head'

const heads = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const HeadObj = heads.reduce((pv, cv, i)=> {
  const tag = heads[i].toUpperCase()
  pv[tag] = (props)=> {
    return (<Head {...props} tagName={heads[i]} />)
  }

  return pv
}, {})

module.exports = {
  ...HeadObj,
  Snippet: require('./snippet'),
  Code: require('./code'),
  Quote: require('./quote'),
  List: require('./list'),
  Table: require('./table'),
  Browser: require('./browser'),
}
