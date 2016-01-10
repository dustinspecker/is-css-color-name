'use strict'
import isCssColorName from '../lib/'
import test from 'ava'

test('should return false for non-strings', t => {
  t.notOk(isCssColorName())
  t.notOk(isCssColorName(1))
  t.notOk(isCssColorName([]))
  t.notOk(isCssColorName(null))
  t.notOk(isCssColorName(undefined))
  t.notOk(isCssColorName({}))
})

test('should return false for non-valid CSS color names', t => {
  t.notOk(isCssColorName('unicorn'))
  t.notOk(isCssColorName('dinosaur'))
})

test('should return true for valid CSS color names', t => {
  t.ok(isCssColorName('green'))
  t.ok(isCssColorName('blue'))
  t.ok(isCssColorName('aliceblue'))
  t.ok(isCssColorName('ALICEBLUE'))
  t.ok(isCssColorName('ALICEblue'))
})
