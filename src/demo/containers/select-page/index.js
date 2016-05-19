import React, {PropTypes} from 'react'
import Select from '~com/select'
import Code from '../../components/code'

const selectProps = {
  options: [
    {label: '1 hour', value: '1h', selected: true},
    {label: '3 hours', value: '3h', },
    {label: '12 hours', value: '12h', },
    {label: '1 day', value: '1d', },
  ],

  isDisabled: false,

  onChange(e, {value}){
    alert(value)
  }
}


class SelectPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>Select</h1>

        <h2><a href="#usage">Usage</a></h2>
        <Code type="js" src={require('./usage.raw')}/>
        <Select {...selectProps} />

        <h2><a href="#disabled">disabled</a></h2>
        <Code type="html" src={require('./disabled.raw')}/>
        <Select {...selectProps} isDisabled={true} />

        <h2><a href="#props">Props</a></h2>
        <Code type="js" src={require('./props.raw')}/>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>type</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>options</td>
              <td>Array</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = SelectPage
