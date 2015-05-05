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

    var isBase62 = require('../tester/isBase62');

    /**
     * Returns an integer representation of `target`. A second parameter can be passed
     * to force the representation, in case it's not natively possible to do so.
     *
     * ```js
     *      XP.toIntFromBase62('a')
     *      // => 10
     *
     *      XP.toIntFromBase62('')
     *      // => undefined
     *```
     *
     * @function toIntFromBase62
     * @param {*} target The value to be transformed.
     * @param {boolean} [force = false] Flag for forced transformation.
     * @returns {number | undefined} Returns the integer representation of `target`.
     */
    module.exports = function toIntFromBase62(target, force) {
        if (!isBase62(target)) { return force ? 0 : undefined; }
        var result = 0, charSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', chars = target.split("").reverse();
        chars.forEach(function (char, index) { result += charSet.indexOf(char) * Math.pow(62, index); });
        return result;
    };

}());