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
        isString       = require('../tester/isString'),
        isTemplate     = require('../tester/isTemplate'),
        isVoid         = require('../tester/isVoid');

    /**
     * Replaces the contents of a node with a text node containing the passed value.
     *
     * ```html
     *      <div id="target">
     *          <div>Inner text</div>
     *      </div>
     *
     *      <script>
     *          var el = document.querySelector('#target');
     *
     *          XP.setText(el, 'Just like a good magician, I made everything disappear.');
     *          // => <div id="target" >
     *                    Just like a good magician, I made everything disappear.
     *                </div>
     *      </script>
     * ```
     *
     * @function setText
     * @param {Node} [node] The node to modify
     * @param {string} [value] The value to be set inside the node
     * @returns {Node | undefined} Returns the modified node
     */
    module.exports = function setText(node, value) {
        assertArgument(isVoid(node) || isNode(node), 1, 'Node');
        assertArgument(isVoid(value) || isString(value), 2, 'string');
        if (node && !isTemplate(node)) { node.textContent = value || ''; }
        return node;
    };

}());