/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function (global) {
    "use strict";

    var isInstance   = require('../tester/isInstance'),
        isPolyfilled = require('../tester/isPolyfilled'),
        isVoid       = require('../tester/isVoid');

    /**
     * Checks if `value` is instance of `Node`.
     *
     *     XP.isNode(document.body);
     *     // => true
     *
     *     XP.isNode(document.body, 9);
     *     // => false
     *
     * @function isNode
     * @param {*} value The value to check.
     * @param {number} [type] 1:element, 3:text, 8:comment, 9:document, 10:documentType, 11:documentFragment
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isNode(value, type) {
        return (isInstance(value, global.Node) || isPolyfilled(value)) && (isVoid(type) || value.nodeType === type);
    };

}(typeof window !== "undefined" ? window : global));