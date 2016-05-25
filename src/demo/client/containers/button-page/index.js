import React from 'react'
import Button from '~com/button'
import Code from '~com/button'

class ButtonPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <p>{'<Button />'}</p>
        <div>
          <Button>Button Text.</Button>
        </div>
        <div>
          <Button data-color="blue">Blue Button</Button>
          <Button data-color="red">Red Button</Button>
          <Button data-color="green">Green Button</Button>
          <Button data-color="yellow">Yellow Button</Button>
          <Button data-color="white">White Button</Button>
          <Button data-color="primary">White Button</Button>
        </div>
      </div>
    )
  }
}

module.exports = ButtonPage
