import React, {PropTypes} from 'react'
import Select from '~com/select'
import {H1, H2, H3, H4, Code, Snippet,
  Quote, List, Table} from '../../components/markdown'


class SelectPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  selectProps = {
    isDisabled: false,

    onChange(e, {value}) {
      alert(value)
    }
  }

  options = [
    <Select.Opt value="1h" isSelected>1 hour</Select.Opt>,
    <Select.Opt value="3h">3 hours</Select.Opt>,
    <Select.Opt value="12h">12 hours</Select.Opt>,
    <Select.Opt value="1d">1 day</Select.Opt>,
  ]

  render() {
    const {selectProps} = this
    return (
      <div>
        <H1>Select</H1>

        <H2>Props</H2>
        <Snippet type="js" src={require('./props.raw')}/>

        <H2>Usage</H2>
        <Snippet type="js" src={require('./usage.raw')}/>
        <Select {...selectProps}>
          {this.options}
        </Select>


        <H2>Disabled</H2>
        <Snippet type="html" src={require('./disabled.raw')}/>
        <Select isDisabled>
          {this.options}
        </Select>
      </div>
    )
  }
}

module.exports = SelectPage
