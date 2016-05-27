'use strict'
import test from 'ava'
import React from 'react'
import {mount, render} from 'enzyme'
import Button from '../index.js'
let $ = {}

test.beforeEach(test => {
  $ = mount(<Button className="btn-class">buttonText</Button>)
})

test('allows us to set props', assert => {
  assert.is($.props().className, 'btn-class')
})

test('should render class btn-class', assert => {
  assert.true($.find('button').hasClass('btn-class'))
})

test('should render text value', assert => {
  assert.is($.find('button').text(), 'buttonText')
})
