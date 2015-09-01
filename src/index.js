'use strict';
import cssColorNames from 'css-color-names';

/**
 * Determine if name is a valid CSS color name
 * @param {String} name - name to determine if is valid CSS color name
 * @return {Boolean} - is name a valid CSS color name?
 */
export default function isCSSColorName(name) {
  return typeof name === 'string' ? !!cssColorNames[name.toLowerCase()] : false;
}
