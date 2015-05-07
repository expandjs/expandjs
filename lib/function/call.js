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
        isBindable     = require('../tester/isBindable'),
        isFunction     = require('../tester/isFunction'),
        isString       = require('../tester/isString'),
        slice          = require('../array/slice');

    /**
     * Calls a method from a collection with the arguments provided individually.
     *
     * ```js
     *     var obj = {
     *         greetings: function (sender, receiver) {
     *             console.log(sender + ' says "Hello!" to ' + receiver);
     *         }
     *     };
     *
     *     XP.call(obj, 'greetings', 'Bob', 'Emma');
     *     // => 'Bob says "Hello!" to Emma'
     * ```
     *
     * @function call
     * @param {Array | Function | Object} collection The container whose method to call
     * @param {string} method The method to be called
     * @param {...*} [var_args] The list of arguments
     */
    module.exports = function call(collection, method, var_args) {
        assertArgument(isBindable(collection, true), 1, 'Array, Function or Object');
        assertArgument(isString(method, true), 2, 'string');
        return isFunction(collection[method]) ? collection[method].apply(collection, slice(arguments, 2)) : undefined;
    };

}());