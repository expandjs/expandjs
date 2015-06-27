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
        createElement  = require('../dom/createElement'),
        getAttributes  = require('../dom/getAttributes'),
        getChildren    = require('../dom/getChildren'),
        isElement      = require('../tester/isElement'),
        isString       = require('../tester/isString'),
        isVoid         = require('../tester/isVoid'),
        replaceNode    = require('../dom/replaceNode');

    /**
     * Creates a new element from an existing one, with a new name, and returns it.
     *
     * ```html
     *  <div id="target" class="foo" bar>
     *      <span>Inner text.</span>
     *  </div>
     *
     *  <script>
     *      var el = document.querySelector('#target');
     *
     *      XP.renameElement(el, 'span');
     *      // => <span id="target" class="foo" bar>
     *                <span>Inner text.</span>
     *            </span>
     *
     *      console.log(el);
     *      // => <span id="target" class="foo" bar>
     *                <span>Inner text.</span>
     *            </span>
     *  </script>
     * ```
     *
     * @function renameElement
     * @param {Element} [element] The element to modify
     * @param {string} [name] The new name of the element
     * @returns {Element | undefined} Returns the newly created element
     */
    module.exports = function renameElement(element, name) {
        assertArgument(isVoid(element) || isElement(element), 1, 'Element');
        assertArgument(isVoid(name) || isString(name), 2, 'string');
        var target = element && name ? createElement(name, {attributes: getAttributes(element), children: getChildren(element)}) : undefined;
        if (target) { replaceNode(element, target); }
        return target || element;
    };

}());