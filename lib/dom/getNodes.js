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
        toArray        = require('../caster/toArray');

    /**
     * Returns all child nodes of an element.
     *
     * ```html
     *      <ul id="target">
     *          <li class="one"></li>
     *          This is a text node
     *          <li class="two"></li>
     *      </ul>
     *
     *      <script>
     *          var elem = document.querySelector('#target');
     *
     *          XP.getNodes(elem)
     *          // => [<li class="one"></li>, "This is a text node", <li class="two"></li>]
     *      </script>
     *```
     *
     * @function getNodes
     * @param {Element} element The reference element
     * @returns {Array} The list of child nodes
     */
    module.exports = function getNodes(element) {
        assertArgument(isElement(element), 1, 'Element');
        return toArray(isContent(element) ? element.getDistributedNodes() : element.childNodes);
    };

}());