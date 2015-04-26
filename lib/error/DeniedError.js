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

    var CustomError = require('../error/CustomError');

    /**
     * Creates a custom error with the `DeniedError` type and a predefined message.
     *
     *      console.log(new DeniedError('Your application'));
     *      // => DeniedError{message: 'Your application is denied.', stack: '...'}
     *
     * @function DeniedError
     * @param {string} key The key to be used in the message.
     * @constructor
     */
    module.exports = function DeniedError(key) { CustomError.call(this, 'DeniedError', key, 'is denied'); };
    module.exports.prototype = Object.create(CustomError.prototype, {constructor: {configurable: true, value: module.exports, writable: true}, name: {value: 'DeniedError', writable: true}});

}());