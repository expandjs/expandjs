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
     * Creates the specified HTML element or an HTMLUnknownElement if the given element name isn't a known one.
     *
     * ```html
     *     XP.createElement('div')
     *     // => <div></div>
     *
     *     var opt = {attributes: {id: 'fooBar', class: 'foo bar'}};
     *
     *     XP.createElement('div', opt);
     *     // => <div id="fooBar" class="foo bar"></div>
     *```
     *
     * @function createElement
     * @param {string} name The tagname of the element to be created
     * @param {Object} [opt] The options to be applied on the new element
     *   @param {Object} [opt.attributes] The attributes to be set on the new element
     *   @param {Array} [opt.children] The children to be set on the new element
     *   @param {Object} [opt.properties] The properties to be set on the new element
     * @returns {Element} Returns the newly created element
     */
    module.exports = function createElement(name, opt) {
        assertArgument(isString(name, true), 1, 'string');
        assertArgument(isVoid(opt) || isObject(opt), 2, 'Object');
        return updateElement(global.document.createElement(name), opt);
    };

}(typeof window !== "undefined" ? window : global));