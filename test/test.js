/* global describe, it */
'use strict';
import isCssColorName from '../lib/';
import {expect} from 'chai';

describe('is-css-color-name', () => {
  it('should return false for non-strings', () => {
    expect(isCssColorName()).to.eql(false);
    expect(isCssColorName(1)).to.eql(false);
    expect(isCssColorName([])).to.eql(false);
    expect(isCssColorName(null)).to.eql(false);
    expect(isCssColorName(undefined)).to.eql(false);
    expect(isCssColorName({})).to.eql(false);
  });

  it('should return false for non-valid CSS color names', () => {
    expect(isCssColorName('unicorn')).to.eql(false);
    expect(isCssColorName('dinosaur')).to.eql(false);
  });

  it('should return true for valid CSS color names', () => {
    expect(isCssColorName('green')).to.eql(true);
    expect(isCssColorName('blue')).to.eql(true);
    expect(isCssColorName('aliceblue')).to.eql(true);
  });
});
