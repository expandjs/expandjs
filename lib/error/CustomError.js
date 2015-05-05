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

    /**
     * Creates a custom error with a predefined message.
     *
     * ```js
     *      console.log(new CustomError('myError', 'myVar', 'caused an error'));
     *      // => CustomError{message: 'myVar caused and error', stack: 'myError: myVar caused an error...'}
     *```
     *
     * @function CustomError
     * @param {string} name The name of the error to be shown in the stack.
     * @param {string} key The key to be shown in the error message.
     * @param {string} [message] Additional error message.
     * @constructor
     */
    module.exports = function CustomError(name, key, message) { var err = Error.call(this, key + (message ? ' ' + message : '')); err.name = name; this.message = err.message; this.stack = err.stack; };
    module.exports.prototype = Object.create(Error.prototype, {constructor: {configurable: true, value: module.exports, writable: true}, name: {value: 'CustomError', writable: true}});

}());