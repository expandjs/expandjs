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
        isElement      = require('../tester/isElement'),
        isString       = require('../tester/isString'),
        isTemplate     = require('../tester/isTemplate'),
        isVoid         = require('../tester/isVoid');

    /**
     * Sets an element's inner HTML, replacing the element's children with
     * the resulting nodes from `value`.
     *
     * ```html
     *      <div id="target"></div>
     *
     *      <script>
     *          var el = document.querySelector('#target');
     *
     *          XP.setHTML(el, 'Just a text node');
     *          // => <div id="target">
     *                  Just a text node
     *                </div>
     *
     *          XP.setHTML(el, '<span>Inline nodes</span>);
     *          // => <div id="target">
     *                  <span>Inline nodes</span>
     *                </div>
     *      </script>
     * ```
     *
     * @function setHTML
     * @param {Element} [element] The reference node to modify
     * @param {string} [value] The string to be parsed and added as HTML
     * @returns {Element | undefined} Returns the modified element
     */
    module.exports = function setHTML(element, value) {
        assertArgument(isVoid(element) || isElement(element), 1, 'Element');
        assertArgument(isVoid(value) || isString(value), 2, 'string');
        var instance = isTemplate(element) ? element.instanceRef_ : element;
        if (instance) { instance.innerHTML = value || ''; }
        return element;
    };

}());