import React from 'react'
import s from './CheckBoxPage.styl'
console.log(s, 'checkbox')
class CheckBoxPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div className={s.hello}>
        This Checkbox Page
      </div>
    )
  }
}

module.exports = CheckBoxPage
