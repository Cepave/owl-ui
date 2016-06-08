import test from 'ava'
import Icon from '../'

test('extend className', assert => {
  const $ = shallow(<Icon className="xyz" />)
  assert.is($.hasClass('xyz'), true)
})

test('pass [width] x [height]', assert => {
  const $ = shallow(<Icon size="20x30" />)
  console.log($.props())
})
