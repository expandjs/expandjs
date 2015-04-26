/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var isString  = require('../tester/isString');

    /**
     * Checks if `value` is base62.
     *
     *      XP.isBase62('abc');
     *      //=> true
     *
     *      XP.isBase62('a b-c');
     *      //=> false
     *
     * @function isBase62
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isBase62(value) {
        return isString(value) && /^[0-9A-Za-z]+$/.test(value);
    };

}());