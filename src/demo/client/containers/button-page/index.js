import React from 'react'
import Button from '~com/button'
import {H1, H2, H3, H4, Code, Snippet,
  Quote, List, Table} from '../../components/markdown'

class ButtonPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <H1>Button</H1>
        <H2>Usage</H2>
        <Snippet src={require('./usage.js.raw')} type="js" />
        <H2>Props</H2>
        <Snippet src={require('./props.js.raw')} type="js" />
        <H2>Default Button style</H2>
        <Snippet src={require('./default.html.raw')} type="js" />
        <Button>Default Button</Button>
        <H2>Set Button color</H2>
        <Snippet src={require('./color.html.raw')} type="js" />
        <div>
          <p>
            <Button color="blue">Blue Button</Button>
          </p>
          <p>
            <Button color="primary">Primary Button</Button>
          </p>
        </div>
        <H2>Set Button size</H2>
        <Snippet src={require('./size.html.raw')} type="js" />
        <div>
          <p>
            <Button size="default">Default size Button</Button>
          </p>
          <p></p>
          <Button size="small">Small size Button</Button>
        </div>
      </div>
    )
  }
}

module.exports = ButtonPage
