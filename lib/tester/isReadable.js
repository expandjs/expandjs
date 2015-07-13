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

    var isVoid        = require('../tester/isVoid'),
        isString      = require('../tester/isString'),
        readableRegex = require('../regex/readableRegex'),
        xnor          = require('../operator/xnor');

    /**
     * Checks if `value` is readable.
     *
     * ```js
     * XP.isReadable('Hello world');
     * // => true
     *
     * XP.isReadable('Hello   world');
     * // => false
     *
     * XP.isReadable('_Hello_world_');
     * // => false
     * ```
     *
     * @function isReadable
     * @param {*} value The value to check.
     * @param {boolean} [notEmpty] Specifies if `value` must be not empty.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isReadable(value, notEmpty) {
        return isString(value) && readableRegex.test(value) && (isVoid(notEmpty) || xnor(value.length, notEmpty));
    };

}());