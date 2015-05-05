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

    var find      = require('../collection/find'),
        isElement = require('../tester/isElement'),
        isVoid    = require('../tester/isVoid'),
        trim      = require('../string/trim'),
        xnor      = require('../operator/xnor');

    /**
     * Checks if `value` is a content node.
     *
     * ```js
     *     XP.isContent(XP.createElement('content'))
     *     // => true
     *
     *     XP.isContent('<content>')
     *     // => false
     *```
     *
     * @function isContent
     * @param {*} value The value to check.
     * @param {boolean} [notEmpty] Specifies if `value` must be not empty.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isContent(value, notEmpty) {
        return isElement(value) && value.tagName.toLowerCase() === 'content' && (isVoid(notEmpty) || xnor(find(value.getDistributedNodes(), function (node) {
            return (node.nodeType === 1 && node.tagName.toLowerCase() !== 'template') || node.nodeType !== 3 || trim(node.textContent, '\r\n ');
        }), notEmpty));
    };

}());