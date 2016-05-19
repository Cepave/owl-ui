import test from 'ava'
import Select from '../'
import s from '../select.styl'

let $
const selectProps = {
  options: [
    {label: '1 hour', value: '1h', selected: true},
    {label: '3 hours', value: '3h', },
    {label: '12 hours', value: '12h', },
    {label: '1 day', value: '1d', },
  ],

  isDisabled: false,
}

test.beforeEach(()=> {
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
