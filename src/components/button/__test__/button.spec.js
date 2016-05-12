'use strict'
import test from 'ava'
import React from 'React'
import {mount, render} from 'enzyme'
import Button from '../index.js'
let $ = {}

test.beforeEach(test => {
  $ = mount(<Button className="btn-class" text="buttonText" />)
})

test('allows us to set props' ,assert => {
  assert.is($.props().className, 'btn-class')
  assert.is($.props().text, 'buttonText')
})

test('should render class btn-class' ,assert => {
  assert.true($.find('button').hasClass('btn-class'))
})

test('should render text value' ,assert => {
  assert.is($.find('button').text(), 'buttonText')
})
