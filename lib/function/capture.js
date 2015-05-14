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

    var assertArgument = require('../assert/assertArgument'),
        isFunction     = require('../tester/isFunction');

    /**
     * Creates a function wrapped inside a try/catch block.
     * The passed `func` is bound to `thisArg`.
     *
     * @function capture
     * @param {Function} func The function to wrap.
     * @param {Function} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the wrapped function.
     */
    module.exports = function capture(func, thisArg) {
        assertArgument(isFunction(func), 1, 'Function');
        return function () { try { return func.apply(thisArg, arguments); } catch (ignore) { } };
    };

}());