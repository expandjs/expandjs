/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const _htmlJsonForms = require('html-json-forms'),
    assertArgument   = require('./assertArgument'),
    isElement        = require('./isElement');

/**
 * Parses the form's data as a JSON, returning an object.
 *
 * @function formData
 * @since 1.0.0
 * @category dom
 * @description Parses the form's data as a JSON, returning an object
 * @source https://github.com/expandjs/expandjs/blog/master/lib/formData.js
 *
 * @param {Element} element The target element
 * @returns {Object} Returns the parsed object
 */
module.exports = function formData(element) {
    assertArgument(isElement(element), 1, 'Element');
    let result = _htmlJsonForms.encode(element);
    delete result[''];
    return result;
};
