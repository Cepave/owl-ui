import React, {PropTypes} from 'react'
import Table from '~com/table'
import s from './table.styl'

import {H1, H2, H3, H4, Code, Snippet,
  Quote, List} from '../../components/markdown'


let lists = []
for(let i = 0; i < 20; i++) {
  lists.push(i)
}

class TablePage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <H1>Table</H1>

        <H2>Props</H2>

        <H2>Demo</H2>
        <Table className={s.table} height={250}>
          <Table.Head isSortable><b># ID</b></Table.Head>
          <Table.Head isSortable>Name</Table.Head>
          <Table.Head isSortable>Date</Table.Head>
          <Table.Head isSortable>Checked</Table.Head>

          <tr>
            <td>1</td>
            <td>Rocky Wu</td>
            <td>20160201</td>
            <td>O</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jimmy</td>
            <td>20151130</td>
            <td>X</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Masato</td>
            <td>20160111</td>
            <td>O</td>
          </tr>
          <tr>
            <td>4</td>
            <td>JJ</td>
            <td>20150111</td>
            <td>O</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Kordan Ou</td>
            <td>20150211</td>
            <td>O</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Lonely One</td>
            <td>20160211</td>
            <td>X</td>
          </tr>
          <tr>
            <td>7</td>
            <td>LuLu</td>
            <td>20150111</td>
            <td>O</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Sheep</td>
            <td>20160313</td>
            <td>O</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Andy Liu</td>
            <td>20160216</td>
            <td>O</td>
          </tr>

          <tr>
            <td>10</td>
            <td>Bill Chen</td>
            <td>20160314</td>
            <td>O</td>
          </tr>

        </Table>

      </div>
    )
  }
}

module.exports = TablePage
