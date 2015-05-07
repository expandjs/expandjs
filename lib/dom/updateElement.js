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
        assign         = require('../object/assign'),
        isElement      = require('../tester/isElement'),
        isObject       = require('../tester/isObject'),
        isVoid         = require('../tester/isVoid'),
        setAttributes  = require('../dom/setAttributes'),
        setChildren    = require('../dom/setChildren');

    /**
     * Updates an element with the new passed options and returns it.
     *
     * The options can contain:
     *      - a list of attributes to be overwritten
     *      - a list of properties to be overwritten
     *      - a list of children to be set instead of the current ones
     *
     * ```html
     *      <div id="target"></div>
     *
     *      <script>
     *          var elem = document.querySelector("#target"),
     *              opt = {
     *                      attributes: {id: 'oldTarget', foo: ''},
     *                      properties: {bar: 'foobar'},
     *                      children: {children: document.createElement('span')}
     *                    };
     *
     *          var updated = XP.updateElement(elem, opt);
     *
     *          console.log(updated);
     *          // => <div id="oldTarget" foo>
     *                  <span></span>
     *                </div>
     *
     *          console.log(updated.bar);
     *          // => 'foobar'
     *      </script>
     * ```
     *
     * @function updateElement
     * @param {Element} [element] The element to update
     * @param {Object} [opt] The list of update options
     *   @param {Object} [opt.attributes] The attributes to be set
     *   @param {Array} [opt.children] The child nodes to be set
     *   @param {Object} [opt.properties] The properties to be set
     * @returns {Element} Returns the updated element
     */
    module.exports = function updateElement(element, opt) {
        assertArgument(isVoid(element) || isElement(element), 1, 'Element');
        assertArgument(isVoid(opt) || isObject(opt), 2, 'Object');
        if (element && opt && opt.attributes) { setAttributes(element, opt.attributes); }
        if (element && opt && opt.properties) { assign(element, opt.properties); }
        if (element && opt && opt.children) { setChildren(element, opt.children); }
        return element;
    };

}());