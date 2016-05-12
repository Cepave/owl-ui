import React, {PropTypes} from 'react'
import Select from '~com/select'
import Code from '../../components/code'
import Selectx from 'react-select'
import c from 'react-select/dist/react-select.css'

const options = [
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
  {label: 'hello', value: 'hello'},
]
class SelectPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>Select</h1>

        <Select options="" />
      </div>
    )
  }
}

module.exports = SelectPage
