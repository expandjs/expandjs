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
        isVoid         = require('../tester/isVoid'),
        isObject       = require('../tester/isObject'),
        isString       = require('../tester/isString'),
        updateElement  = require('../dom/updateElement');

    /**
     * Creates an element with the specified namespace URI and qualified name.
     *
     * ```html
     *     XP.createElementNS('http://www.w3.org/2000/svg', 'svg');
     *     // => <svg xmlns="http://www.w3.org/2000/svg"></svg>
     *
     *     var opt = {
     *         attributes: {
     *             'xmlns:xlink': 'http://www.w3.org/1999/xlink',
     *             id: 'mySVG',
     *             height: '200px',
     *             width: '200px'
     *         }
     *     };
     *
     *     XP.createElementNS('http://www.w3.org/2000/svg', 'svg', opt);
     *     // => <svg xmlns="http://www.w3.org/2000/svg"
     *                xmlns:xlink="http://www.w3.org/1999/xlink"
     *                id="mySVG"
     *                height="200px"
     *                width="200px"></svg>
     * ```
     *
     * @function createElementNS
     * @param {string} namespace The namespace URI associate with the element.
     * @param {string} name The tagname of the element to be created
     * @param {Object} [opt] The options to be applied on the new element
     *   @param {Object} [opt.attributes] The attributes to be set on the new element
     *   @param {Array} [opt.children] The children to be set on the new element
     *   @param {Object} [opt.properties] The properties to be set on the new element
     * @returns {Element} Returns the newly created element
     */
    module.exports = function createElementNS(namespace, name, opt) {
        assertArgument(isString(namespace, true), 1, 'string');
        assertArgument(isString(name, true), 2, 'string');
        assertArgument(isVoid(opt) || isObject(opt), 3, 'Object');
        return updateElement(global.document.createElementNS(namespace, name), opt);
    };

}(typeof window !== "undefined" ? window : global));