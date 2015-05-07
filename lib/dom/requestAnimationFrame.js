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
        isFunction     = require('../tester/isFunction');

    /**
     * Lets the browser know that you wish to execute a function and it
     * will invoke is right before the next repaint.
     *
     * ```html
     *      XP.requestAnimationFrame(function () {
     *          alert('I am called without stepping on the browser's toes');
     *      })
     * ```
     *
     * @function requestAnimationFrame
     * @param {Function} func
     */
    module.exports = function requestAnimationFrame(func) {
        assertArgument(isFunction(func), 1, 'Function');
        global.requestAnimationFrame(func);
    };

}(typeof window !== "undefined" ? window : global));