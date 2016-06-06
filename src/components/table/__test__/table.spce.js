import test from 'ava'
import Table from '../'
import pick from 'lodash.pick'

test('it should extend className', assert => {
  const $ = shallow(
    <Table className="xyz" />
  )
  assert.is(true, $.find('table').hasClass('xyz'))
})


test('default sorting', assert => {
  const trs = [
    <tr>
      <td>1</td>
      <td>Rocky</td>
      <td>X</td>
    </tr>,
    <tr>
      <td>2</td>
      <td>Timmy</td>
      <td>O</td>
    </tr>
  ]

  let $ = mount(
    <Table>
      <Table.Head sort="1">#ID</Table.Head>
      <Table.Head sort>Name</Table.Head>
      <Table.Head>Checked</Table.Head>
      {trs}
    </Table>
  )
  assert.is($.state('trs')[0].tds[0], '2')

  $ = mount(
    <Table>
      <Table.Head sort="0">#ID</Table.Head>
      <Table.Head sort>Name</Table.Head>
      <Table.Head>Checked</Table.Head>

      {trs}
    </Table>
  )
  assert.is($.state('trs')[0].tds[0], '1')

  $ = mount(
    <Table>
      <Table.Head sort>#ID</Table.Head>
      <Table.Head sort="0">Name</Table.Head>
      <Table.Head>Checked</Table.Head>

      {trs}
    </Table>
  )
  assert.is($.state('trs')[0].tds[0], '1')

  $ = mount(
    <Table>
      <Table.Head sort>#ID</Table.Head>
      <Table.Head sort="1">Name</Table.Head>
      <Table.Head>Checked</Table.Head>

      {trs}
    </Table>
  )
  assert.is($.state('trs')[0].tds[0], '2')
})


test('click sorting', assert => {
  let $ = mount(
    <Table>
      <Table.Head sort className="clickme">#ID</Table.Head>
      <Table.Head sort>Name</Table.Head>
      <Table.Head>Checked</Table.Head>

      <tr>
        <td>1</td>
        <td>Rocky</td>
        <td>X</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Timmy</td>
        <td>O</td>
      </tr>
    </Table>
  )

  $.find('.clickme').simulate('click')
  assert.is($.state('trs')[0].tds[0], '2')
})


test('tests sort by number and text', assert => {
  const table =
    <Table>
      <Table.Head sort id="click-id">#ID</Table.Head>
      <Table.Head sort id="click-name">Name</Table.Head>
      <Table.Head>Checked</Table.Head>

      <tr>
        <td>1</td>
        <td>Rocky</td>
        <td>X</td>
      </tr>

      <tr>
        <td>2</td>
        <td>Timmy</td>
        <td>O</td>
      </tr>

      <tr>
        <td>3</td>
        <td>Zoo</td>
        <td>X</td>
      </tr>

      <tr>
        <td>5</td>
        <td>Apple</td>
        <td>O</td>
      </tr>
    </Table>

  const getTrs = ()=> {
    return $.state('trs').reduce((d, tr)=> {
      d.push(pick(tr, ['tds']))
      return d
    }, [])
  }

  const $ = mount(table)

  $.find('#click-id').simulate('click')
  assert.deepEqual(getTrs(), [
    { tds: [ '5', 'Apple', 'O' ] },
    { tds: [ '3', 'Zoo', 'X' ] },
    { tds: [ '2', 'Timmy', 'O' ] },
    { tds: [ '1', 'Rocky', 'X' ] },
  ], 'sort by number desc')


  $.find('#click-id').simulate('click')
  assert.deepEqual(getTrs(), [
    { tds: [ '1', 'Rocky', 'X' ] },
    { tds: [ '2', 'Timmy', 'O' ] },
    { tds: [ '3', 'Zoo', 'X' ] },
    { tds: [ '5', 'Apple', 'O' ] },
  ], 'sort by number asc')

  $.find('#click-name').simulate('click')
  assert.deepEqual(getTrs(), [
    { tds: [ '3', 'Zoo', 'X' ] },
    { tds: [ '2', 'Timmy', 'O' ] },
    { tds: [ '1', 'Rocky', 'X' ] },
    { tds: [ '5', 'Apple', 'O' ] },
  ], 'sort by text desc')

  $.find('#click-name').simulate('click')
  assert.deepEqual(getTrs(), [
    { tds: [ '5', 'Apple', 'O' ] },
    { tds: [ '1', 'Rocky', 'X' ] },
    { tds: [ '2', 'Timmy', 'O' ] },
    { tds: [ '3', 'Zoo', 'X' ] },
  ], 'sort by text desc')
})
