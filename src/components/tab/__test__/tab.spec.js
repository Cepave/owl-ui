import test from 'ava'
import Tab from '../'

test('state.selected should be `t1`', assert => {
  const $ = shallow(
    <Tab>
      <Tab.Head name="t1">Tab1</Tab.Head>
      <Tab.Content name="t1"> Content </Tab.Content>

      <Tab.Head name="t2">Tab2</Tab.Head>
      <Tab.Content name="t2">Content 2</Tab.Content>
    </Tab>
  )
  assert.is($.state().selected, 't1')
})

test('state.selected should be `t2`', assert => {
  const $ = shallow(
    <Tab>
      <Tab.Head name="t1">Tab1</Tab.Head>
      <Tab.Content name="t1"> Content </Tab.Content>

      <Tab.Head name="t2" isSelected>Tab2</Tab.Head>
      <Tab.Content name="t2">Content 2</Tab.Content>
    </Tab>
  )
  assert.is($.state().selected, 't2')
})

test('click head', assert => {
  const $ = mount(
    <Tab>
      <Tab.Head name="t1" className="t1">Tab1</Tab.Head>
      <Tab.Head name="t2" isSelected>Tab2</Tab.Head>

      <Tab.Content name="t1"> Content </Tab.Content>
      <Tab.Content name="t2">Content 2</Tab.Content>
    </Tab>
  )

  $.find('.t1').simulate('click')
  assert.is($.state().selected, 't1')
  assert.is($.find('[data-role="tab-head"] [data-selected=1]').text(), 'Tab1', 'Tab1')
})

test('<Tab/> should extend classname', assert => {
  const $ = shallow(
    <Tab className="hello-tab">
      <Tab.Head name="t1" className="t1">Tab1</Tab.Head>
      <Tab.Head name="t2" isSelected>Tab2</Tab.Head>

      <Tab.Content name="t1"> Content </Tab.Content>
      <Tab.Content name="t2">Content 2</Tab.Content>
    </Tab>
  )

  assert.is($.hasClass('hello-tab'), true)
})
