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

    var lodash       = require('lodash'),
        find         = require('../collection/find'),
        isPolyfilled = require('../tester/isPolyfilled'),
        isShady      = require('../tester/isShady'),
        isVoid       = require('../tester/isVoid'),
        xor          = require('../operator/xor');

    /**
     * Checks if `value` is a DOM element.
     *
     * ```js
     * XP.isElement(document.body);
     * // => true
     *
     * XP.isElement('<body>');
     * // => false
     * ```
     *
     * @function isElement
     * @param {*} value The value to check.
     * @param {boolean} [notEmpty] Specifies if `value` must be not empty.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isElement(value, notEmpty) {
        if (!lodash.isElement(value) && !isPolyfilled(value) && (!isShady(value) || value.node.nodeType !== 1)) { return false; }
        if (!isVoid(notEmpty) && xor(notEmpty, find(value.childNodes, function (node) { return node.nodeType !== 1 || node.tagName.toLowerCase() !== 'template'; }))) { return false; }
        return true;
    };

}());