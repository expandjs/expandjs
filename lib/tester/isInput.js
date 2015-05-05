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
     * Checks if `target` is an input value (string or finite numbers). A second
     * parameter can be passed to assure that the passed string is not empty.
     *
     * ```js
     *     XP.isInput('string');
     *     // => true
     *
     *     XP.isInput('', true);
     *     // => false
     *
     *     XP.isInput(123);
     *     // => true
     *```
     *
     * @function isInput
     * @param {*} target
     * @param {boolean} [notEmpty]
     * @returns {boolean}
     */
    module.exports = function isInput(target, notEmpty) {
        return isString(target, notEmpty) || isFinite(target);
    };

}());