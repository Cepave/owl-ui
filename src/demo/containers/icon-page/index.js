import React from 'react'
import Code from '../../components/code'
import s from './icon-page.styl'

const code1 = require('./code1.raw')

class IconPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        This Icon Page
        <Code type="js" src={code1}/>
      </div>
    )
  }
}

module.exports = IconPage
