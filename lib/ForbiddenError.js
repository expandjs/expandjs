/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

/**
 * Creates a `ForbiddenError` with code 403 and a default message.
 *
 * ```js
 * console.log(new XP.ForbiddenError());
 * // => ForbiddenError{message: 'Access denied.', code: 403, stack: '...'}
 * ```
 *
 * @function ForbiddenError
 * @since 1.0.0
 * @category error
 * @description Creates a `ForbiddenError` with code 403 and a default message
 * @source https://github.com/expandjs/expandjs/blog/master/lib/ForbiddenError.js
 *
 * @param {string} [message = "Access denied."] The error's message
 */
module.exports = function ForbiddenError(message) {

    // Let
    let error = new Error(message || 'Access denied.');

    // Setting
    error.name = 'ForbiddenError';
    error.code = 403;

    // Returning
    return error;
};
