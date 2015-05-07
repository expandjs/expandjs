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

    var isVoid    = require('../tester/isVoid'),
        isFinite  = require('../tester/isFinite'),
        toNumber  = require('../caster/toNumber'),
        toString  = require('../caster/toString'),
        xnor      = require('../operator/xnor');

    /**
     * Checks if `value` is numeric.
     *
     * ```js
     *     XP.isNumber(1);
     *     // => true
     *
     *     XP.isNumber('1');
     *     // => true
     *
     *     XP.isNumber(NaN);
     *     // => false
     * ```
     *
     * @function isNumeric
     * @param {*} value The value to check.
     * @param {boolean} [notNegative] Specifies if `value` must be not negative.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isNumeric(value, notNegative) {
        var number = toNumber(value);
        return isFinite(number) && value === toString(number) && (isVoid(notNegative) || xnor(number >= 0, notNegative));
    };

}());