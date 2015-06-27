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
        findElement    = require('../dom/findElement'),
        isElement      = require('../tester/isElement'),
        toDOMIdentity  = require('../caster/toDOMIdentity');

    /**
     * Returns true if `element` has a direct child that matches the passed identity.
     *
     * ```html
     *  <ul id="target">
     *      <li class="item"></li>
     *      <li class="item active"></li>
     *      <li class="item"></li>
     *  </ul>
     *
     *  <script>
     *      var elem = document.querySelector('#target');
     *
     *      XP.hasChild(elem, '.active');
     *      // => true
     *
     *      XP.hasChild(elem, '.disabled')
     *      // = > false
     *  </script>
     * ```
     *
     * @function hasChild
     * @param {Element} element The reference element
     * @param {Element | Function | string} identity The identity of the node to be found
     * @returns {boolean} Returns true if the node is found, otherwise false
     */
    module.exports = function hasChild(element, identity) {
        var casted = toDOMIdentity(identity);
        assertArgument(isElement(element), 1, 'Element');
        assertArgument(casted, 2, 'Element, Function or string');
        return !!findElement(element, identity);
    };

}());