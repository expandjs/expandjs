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

    var assertArgument   = require('../assert/assertArgument'),
        isElement        = require('../tester/isElement'),
        getSiblings      = require('../array/getSiblings'),
        getChildren      = require('../dom/getChildren'),
        getParentElement = require('../dom/getParentElement');

    /**
     * Returns an array with the sibling elements immediately
     * preceding or following the reference `element`.
     *
     * ```html
     *      <ul>
     *          <li class="one"></li>
     *          <li class="two"></li>
     *          <li class="three"></li>
     *          <li class="four"></li>
     *      </ul>
     *
     *      <script>
     *          var elem = document.querySelector('.two');
     *
     *          console.log(elem);
     *          // => <li class="two"></li>
     *
     *          XP.getSiblingElements(elem);
     *          // => [<li class="one"></li>, <li class="three"></li>]
     *      </script>
     *```
     *
     * @function getSiblingElements
     * @param {Element} element The reference element
     * @returns {Array} Returns an array with the sibling elements
     */
    module.exports = function getSiblingElements(element) {
        assertArgument(isElement(element), 1, 'Element');
        return getSiblings(getChildren(getParentElement(element)), element);
    };

}());