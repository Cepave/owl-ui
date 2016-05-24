import test from 'ava'
import Tip from '../index'

let $
test.beforeEach(()=> {
  $ = shallow(<Tip text="tip" />)
})

test('Tip default props', assert => {
  assert.is($.prop('data-pos'), 'top')
  assert.is($.prop('data-text'), 'tip')
})


test('Tip set pos=left', assert => {
  $.setProps({pos: 'left'})
  assert.is($.prop('data-pos'), 'left')
  assert.is($.prop('data-text'), 'tip')
})


test('Tip set pos=top', assert => {
  $.setProps({pos: 'top'})
  assert.is($.prop('data-pos'), 'top')
  assert.is($.prop('data-text'), 'tip')
})

test('Tip set pos=right', assert => {
  $.setProps({pos: 'right'})
  assert.is($.prop('data-pos'), 'right')
  assert.is($.prop('data-text'), 'tip')
})

test('Tip set pos=bottom', assert => {
  $.setProps({pos: 'bottom'})
  assert.is($.prop('data-pos'), 'bottom')
  assert.is($.prop('data-text'), 'tip')
})
