import React, {Component} from 'react'
import Tab from '~com/tab'

import {H1, H2, H3, H4, Code, Snippet,
  Quote, List, Table} from '../../components/markdown'

class TabPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <H1>Tab</H1>

        <H2>Usage</H2>
        <Snippet type="js" src={require('./usage.js.raw')}></Snippet>
        <p>
          <b>Tab.Head</b> and <b>Tab.Content</b>'s <Code>name</Code> are required.
          It will be matched.
        </p>

        <H2>Demo</H2>
        <Tab hasHash={true}>
          <Tab.Head name="t1"  >Tab1</Tab.Head>
          <Tab.Content name="t1" className="hello-table">
            Content 1
          </Tab.Content>

          <Tab.Head name="t2" >Tab2</Tab.Head>
          <Tab.Content name="t2">Content 2</Tab.Content>

          <Tab.Head name="t3" isSelected>Tab3</Tab.Head>
          <Tab.Content name="t3">content 3</Tab.Content>
        </Tab>

        <H2>Tab.Head</H2>
        <H3>Props</H3>
        <Snippet type="js" src={require('./tab-head.pros.js.raw')}></Snippet>
      </div>
    )
  }
}

module.exports = TabPage
