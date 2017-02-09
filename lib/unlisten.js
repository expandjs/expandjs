/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const assertArgument = require('./assertArgument'),
    isFunction       = require('./isFunction'),
    isNode           = require('./isNode'),
    isObject         = require('./isObject'),
    isString         = require('./isString'),
    isVoid           = require('./isVoid');

/**
 * Removes an event listener from the provided `node`.
 * If no node is provided, the listener will be removed from `window`.
 *
 * ```html
 * <div id="target"></div>
 *
 * <script>
 *     let el = document.querySelector("#target");
 *     // => <div id="target"></div>
 *
 *     let listener = event => el.appendChild(document.createTextNode('This is a text node.\n'));
 *     // A new text line is added every time the div is clicked
 *
 *     XP.listen(elem, 'click', listener);
 *     // => <div id="target"></div>
 *
 *     XP.unlisten(elem, 'click', listener);
 *     // => <div id="target"></div>
 * </script>
 * ```
 *
 * @function unlisten
 * @since 1.0.0
 * @category dom
 * @description Removes an event listener from the provided `node`
 * @source https://github.com/expandjs/expandjs/blog/master/lib/unlisten.js
 *
 * @param {Node | Window} [node] The target node
 * @param {Object | string} [event] The event to not listen for
 * @param {Function} [listener] The listener to remove
 * @returns {Node | Window} Returns `node`
 */
module.exports = function unlisten(node, event, listener) {

    // Preparing
    if (!isNode(node) && (isObject(node) || isString(node))) { listener = event; event = node; node = global; }

    // Asserting
    assertArgument(isVoid(node) || isNode(node) || node === global, 1, 'Element or Window');
    assertArgument(isVoid(event) || isObject(event) || isString(event), 2, 'Object or string');
    assertArgument(isVoid(listener) || isFunction(listener), 3, 'Function');

    // Preventing
    if (isVoid(node)) { return node; }

    // Unlistening
    if (isObject(event)) { Object.keys(event).forEach(key => isFunction(event[key]) && node.removeEventListener(key, event[key])); }
    if (isString(event, true) && isFunction(listener)) { node.removeEventListener(event, listener); }

    // Returning
    return node;
};
