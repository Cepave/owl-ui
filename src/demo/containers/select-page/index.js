import React, {PropTypes} from 'react'
import Select from '~com/select'
import {H1, H2, H3, H4, Code, Snippet,
  Quote, List, Table} from '../../components/markdown'


class SelectPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  selectProps = {
    options: [
      {label: '1 hour', value: '1h', selected: true},
      {label: '3 hours', value: '3h', },
      {label: '12 hours', value: '12h', },
      {label: '1 day', value: '1d', },
    ],

    isDisabled: false,

    onChange(e, {value}) {
      alert(value)
    }
  }

  render() {
    const {selectProps} = this
    return (
      <div>
        <H1>Select</H1>

        <H2>Props</H2>
        <Snippet type="js" src={require('./props.raw')}/>

        <H2>Usage</H2>
        <Snippet type="js" src={require('./usage.raw')}/>
        <Select {...selectProps} />

        <H2>Disabled</H2>
        <Snippet type="html" src={require('./disabled.raw')}/>
        <Select {...selectProps} isDisabled={true} />
      </div>
    )
  }
}

module.exports = SelectPage
