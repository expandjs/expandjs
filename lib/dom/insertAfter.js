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
        isNode         = require('../tester/isNode'),
        isVoid         = require('../tester/isVoid');

    /**
     * Inserts a desired node after a reference `node`.
     *
     * ```html
     *      <div id="outer">
     *          <div id="target">
     *      </div>
     *
     *      <script>
     *          var elem = document.querySelector('#target'),
     *              newElem = document.createElement('div');
     *
     *          XP.insertAfter(elem, newElem);
     *          // => <div></div>
     *
     *          console.log(document.querySelector('#outer'))
     *          // => <div id="outer>
     *                  <div id="target"></div>
     *                  <div></div>
     *                </div>
     *      </script>
     *```
     *
     * @function insertAfter
     * @param {Node} [node] The reference node
     * @param {Node} [target] The target node to be inserted
     * @returns {Node | undefined} Returns the inserted node
     */
    module.exports = function insertAfter(node, target) {
        assertArgument(isVoid(node) || isNode(node), 1, 'Node');
        assertArgument(isVoid(target) || isNode(target), 2, 'Node');
        if (node && target) { node.parentNode.insertBefore(target, node.nextSibling); }
        return target;
    };

}());