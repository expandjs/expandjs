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
        toArray        = require('../caster/toArray');

    /**
     * Returns an array of child elements of the given `element`.
     *
     * ```html
     *  <ul id="list">
     *      <li class="one"></li>
     *      <li class="two"></li>
     *      <li class="three"></li>
     *  </ul>
     *
     *  <script>
     *      var elem = document.querySelector('#list');
     *
     *      XP.getChildren(elem);
     *      // => [<li class="one"></li>, <li class="two"></li>, <li class="three"></li>]
     *  </script>
     * ```
     *
     * @function getChildren
     * @param {Element} element The reference element
     * @returns {Array} Returns the list of child element
     */
    module.exports = function getChildren(element) {
        assertArgument(isElement(element), 1, 'Element');
        return toArray(element.children);
    };

}());