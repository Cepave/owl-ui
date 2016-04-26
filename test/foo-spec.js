import React from 'react'
import {mount, shallow} from 'enzyme'
import Icon from '~com/Icon.jsx'
import test from 'ava'

let icon
test.beforeEach(()=> {
  icon = shallow(<Icon size={30} link="apple" />)
})

test('#test <Icon /> width', (assert)=> {
  assert.is(icon.props().style.width, 30)
})

test('#<use> element should be hava #apple', (assert) => {
  assert.regex(icon.html(), /\<use xlink\:href="#apple" \/\>/)
})

//const { assert } = chai
//describe('#test <Icon />', ()=> {
//  let icon
//  beforeEach(()=> {
//    icon = shallow(<Icon size={30} link="apple" />)
//  })
//
//  it('set size', ()=> {
//    assert.strictEqual(icon.props().style.width, 30)
//  })
//
//  it('<use> element should be have #apple', ()=> {
//    assert.include(icon.html(), '<use xlink:href="#apple" />')
//  })
//})
