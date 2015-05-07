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
        isContent      = require('../tester/isContent'),
        isElement      = require('../tester/isElement'),
        isIndex        = require('../tester/isIndex');

    /**
     * Returns an element's child node with the specified index.
     *
     * ```html
     *      <ul id="target">
     *          <li class="one"></li>
     *          This is a text node
     *          <li class="two"></li>
     *          <li class="three"></li>
     *          <li class="four"></li>
     *      </ul>
     *
     *      <script>
     *          var elem = document.querySelector('#target');
     *
     *          XP.getNode(elem, 3)
     *          // => <li class="three"></li>
     *
     *          XP.getNode(elem, 5)
     *          // => undefined
     *      </script>
     * ```
     *
     * @function getNode
     * @param {Element} element The reference element
     * @param {number} index The index of the node to be retuned
     * @returns {Element | undefined} Returns the node with the specified index or undefined
     */
    module.exports = function getNode(element, index) {
        assertArgument(isElement(element), 1, 'Element');
        assertArgument(isIndex(index), 2, 'number');
        return (isContent(element) ? element.getDistributedNodes() : element.childNodes)[index];
    };

}());