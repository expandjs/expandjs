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
        isTemplate     = require('../tester/isTemplate');

    /**
     * Returns and element's inner HTML.
     *
     * ```html
     *      <div id="target">
     *          This is a text node.
     *          <span>This is an element node.</span>
     *      </div>
     *
     *      <script>
     *          var elem = document.querySelector('#target');
     *
     *          XP.getHTML(elem);
     *          // => 'This is a text node.
     *                 <span>This is an element node.</span>'
     *
     *      </script>
     *```
     *
     * @function getHTML
     * @param {Element} element The reference node
     * @returns {string} Returns the HTML content of the element as string.
     */
    module.exports = function getHTML(element) {
        assertArgument(isElement(element), 1, 'Element');
        return (isTemplate(element) ? element.instanceRef_ : element).innerHTML;
    };

}());