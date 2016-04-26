import React from 'react'
import s from './IconPage.styl'
console.log(s, 'iconpage')

class IconPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div className={s.hello}>
        This Icon Page
      </div>
    )
  }
}

module.exports = IconPage
