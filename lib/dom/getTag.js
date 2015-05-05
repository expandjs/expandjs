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
        isElement      = require('../tester/isElement');

    /**
     * Returns the tag name of an element in a lowercase format.
     *
     * ```html
     *      <div id="target1"></div>
     *      <custom-element id="target2"></custom-element>
     *
     *      <script>
     *          var elem1 = document.querySelector('#target1'),
     *              elem2 = document.querySelector('#target2');
     *
     *          XP.getTag(elem1);
     *          // => 'div'
     *
     *          XP.getTag(elem2);
     *          // => 'custom-element'
     *      </script>
     *```
     *
     * @function getTag
     * @param {Element} element The reference element
     * @returns {string} The tag name of the element, in lowercase format.
     */
    module.exports = function getTag(element) {
        assertArgument(isElement(element), 1, 'Element');
        return element.tagName.toLowerCase();
    };

}());