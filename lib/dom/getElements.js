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
        findElements   = require('../dom/findElements'),
        isElement      = require('../tester/isElement'),
        isNode         = require('../tester/isNode'),
        isSelector     = require('../tester/isSelector'),
        isVoid         = require('../tester/isVoid'),
        toArray        = require('../caster/toArray');

    /**
     * Returns an array of elements that are descended of `element` and matche the specified `selector`.
     * The first parameter can be directly the CSS query, in that case `document` will be used as `element`.
     *
     * ```html
     *  <div id="target">
     *      <div class="item one"></div>
     *      <div class="item two"></div>
     *  </div>
     *
     *  <script>
     *
     *      var elems = XP.getElements('#target');
     *
     *      console.log(elems);
     *      // => [<div id="target">...</div>]
     *
     *      XP.getElements(elems[0], '.item');
     *      // => [<div class="item one"></div>, <div class="item two"></div>]
     *
     *  </script>
     * ```
     *
     * @function getElements
     * @param {Element | HTMLDocument} element The element to search
     * @param {string} [selector] The CSS selector to be matched
     * @returns {Array} Returns an array with the found elements
     */
    module.exports = function getElements(element, selector) {
        if (isSelector(element)) { selector = element; element = document; }
        assertArgument(isElement(element) || isNode(element, 9), 1, 'Element or HTMLDocument');
        assertArgument(isVoid(selector) || isSelector(selector), 2, 'string');
        if (isSelector(selector)) { return toArray(element.querySelectorAll(selector)); }
        if (isElement(element)) { return findElements(element, selector); }
        return findElements(element.body, selector);
    };

}(typeof window !== "undefined" ? window : global));