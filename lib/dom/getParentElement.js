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
        isNode         = require('../tester/isNode');

    /**
     * Returns the parent element of the specified `node`.
     *
     * ```html
     *      <ul id="target">
     *          <li class="one"></li>
     *          This is a text node
     *          <li class="two"></li>
     *      </ul>
     *
     *      <script>
     *          var elem = document.querySelector('.one');
     *
     *          console.log(elem);
     *          // => <li class="one"></li>
     *
     *          XP.getParentElement(elem)
     *          // => <ul id="target">...</ul>
     *      </script>
     *```
     *
     * @function getParentElement
     * @param {Node} node The node whose parent we need
     * @returns {Node | undefined} The parent element or undefined
     */
    module.exports = function getParentElement(node) {
        assertArgument(isNode(node), 1, 'Node');
        return node.parentNode;
    };

}());