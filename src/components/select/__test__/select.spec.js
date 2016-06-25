import test from 'ava'
import Select from '../'
import s from '../select.styl'

let $, selectProps

test.beforeEach(()=> {
  selectProps = {
    children: [
      <Select.Opt value="1h" isSelected>1 hour</Select.Opt>,
      <Select.Opt value="3h">3 hours</Select.Opt>,
      <Select.Opt value="12h">12 hours</Select.Opt>,
      <Select.Opt value="1d">1 day</Select.Opt>,
    ],

    isDisabled: false,
  }
  $ = mount(<Select {...selectProps}/>)
})

test('default title should be `1 hour`', assert => {
  assert.is($.find(`.${s.title}`).text().trim(), '1 hour')
})

test('Click title should be change state `isOpen`', assert => {
  assert.is($.state().isOpen, false)
  $.find(`.${s.title}`).simulate('click')
  assert.is($.state().isOpen, true)
})

test('Bulr should be close', assert => {
  $.simulate('blur')
  assert.is($.state().isOpen, false)
})

test('onChange the select', assert => {
  $.find(`.${s.options}`).at(2).simulate('click')

  assert.is($.state().isOpen, false)
  assert.is($.find(`.${s.title}`).text().trim(), '12 hours')
})

test('should extend className', assert => {
  $ = shallow(<Select {...selectProps} className="hello-select"/>)
  assert.is($.hasClass('hello-select'), true)
})

test('Dynamic update should don\'t update, if same reference children', assert=> {
  const {children} = selectProps

  children.push(
    <Select.Opt value="3d">3 days</Select.Opt>
  )

  $.setProps({
    children
  })

  assert.is($.find(`.${s.options}`).length, 4)
})

test('Dynamic update should be updated, if different reference children', assert=> {
  const {children} = selectProps

  $.setProps({
    children: [...children, <Select.Opt value="3d">3 days</Select.Opt>]
  })

  assert.is($.find(`.${s.options}`).length, 5)
})
