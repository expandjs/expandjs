/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

/**
 * Checks if `value` is truthy.
 *
 * ```js
 * XP.isTruthy(true);
 * // => true
 *
 * XP.isTruthy('true');
 * // => true
 *
 * XP.isTruthy(1);
 * // => true
 * ```
 *
 * @function isTruthy
 * @since 1.0.0
 * @category tester
 * @description Checks if `value` is truthy
 * @source https://github.com/expandjs/expandjs/blog/master/lib/isTruthy.js
 *
 * @param {*} value The target value
 * @returns {boolean} Returns `true` or `false` based on the check
 */
module.exports = function isTruthy(value) {
    return !!value;
};