/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function (global) {
    "use strict";

    var assertArgument = require('../assert/assertArgument'),
        isBrowser      = require('../tester/isBrowser'),
        isDefined      = require('../tester/isDefined'),
        isString       = require('../tester/isString');

    /**
     * Stores a `value` with the specified `key` in the global scope (window) of the browser.
     * Returns `true` if everything went as planned, otherwise `false` is returned if the storing procedure failed.
     *
     * ```js
     *     var arr = [1, 2, 3];
     *
     *     XP.browserify(arr, 'myArray');
     *     // => true
     *
     *     console.log(window.myArray);
     *     // => [1, 2, 3]
     *```
     *
     * @function browserify
     * @param {*} value The value to be stored
     * @param {string} key The key to be used as a reference to our value
     * @returns {boolean} Returns the status of the action as boolean.
     */
    module.exports = function browserify(value, key) {
        assertArgument(isDefined(value), 1, 'defined');
        assertArgument(isString(key, true), 2, 'string');
        return isBrowser() && isDefined(global[key] = value);
    };

}(typeof window !== "undefined" ? window : global));