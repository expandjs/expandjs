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

    var isElement     = require('../tester/isElement'),
        isVoid        = require('../tester/isVoid'),
        createElement = require('../dom/createElement');

    /**
     * Returns a template representation of `target`. A second parameter can be passed
     * to force the representation, in case it's not natively possible to do so.
     *
     * ```html
     *      <div id="target"><span class="text">This is a node</span></div>
     *
     *      <script>
     *          var elem = document.querySelector('#target'),
     *              tmp = XP.toTemplate(elem);
     *
     *              console.log(tmp);
     *              // => <template>
     *                        #document-fragment
     *                            <span class="text">This is a node</span>
     *                    </template>
     *      </script>
     *```
     *
     * @function toTemplate
     * @param {*} target The value to be transformed.
     * @param {boolean} force Flag for forced transformation.
     * @returns {Element | undefined} Returns the template representation of `target`.
     */
    module.exports = function toTemplate(target, force) {
        if (isVoid(target = isElement(target) ? target : (force ? createElement('div') : null))) { return; }
        var child = target.firstChild, result = createElement('template');
        while (child) { result.content.appendChild(child.cloneNode(true)); child = child.nextSibling; }
        return result;
    };

}());