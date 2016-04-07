'use strict'
import isCssColorName from '../lib/'
import test from 'ava'

test('should return false for non-strings', t => {
  t.falsy(isCssColorName())
  t.falsy(isCssColorName(1))
  t.falsy(isCssColorName([]))
  t.falsy(isCssColorName(null))
  t.falsy(isCssColorName(undefined))
  t.falsy(isCssColorName({}))
})

test('should return false for non-valid CSS color names', t => {
  t.falsy(isCssColorName('unicorn'))
  t.falsy(isCssColorName('dinosaur'))
})

test('should return true for valid CSS color names', t => {
  t.truthy(isCssColorName('green'))
  t.truthy(isCssColorName('blue'))
  t.truthy(isCssColorName('aliceblue'))
  t.truthy(isCssColorName('ALICEBLUE'))
  t.truthy(isCssColorName('ALICEblue'))
})
