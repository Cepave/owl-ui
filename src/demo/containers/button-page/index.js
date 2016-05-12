import React from 'react'
import Button from '~com/button'
import Code from '~com/button'

class ButtonPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <p>This A Button </p>
        <Button text="Button Text."/>
      </div>
    )
  }
}

module.exports = ButtonPage
