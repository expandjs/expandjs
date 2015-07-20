/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var isFinite = require('../tester/isFinite'),
        isString = require('../tester/isString');

    /**
     * Checks if `value` is alphanumeric. (`number`, `string`)
     *
     * ```js
     * XP.isAlphanumeric('Hello world');
     * // => true
     *
     * XP.isAlphanumeric(0);
     * // => true
     *
     * XP.isAlphanumeric(false);
     * // => false
     *
     * XP.isAlphanumeric(null);
     * // => false
     *
     * XP.isAlphanumeric([]);
     * // => false
     * ```
     *
     * @function isAlphanumeric
     * @param {*} value The value to check.
     * @param {boolean} [notEmpty] Specifies if `value` must be not empty.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isAlphanumeric(value, notEmpty) {
        return isFinite(value) || isString(value, notEmpty);
    };

}());