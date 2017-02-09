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
 * Adds an event listener to `node`.
 * If no `node` is provided, the listener will be set on `window`.
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
 * @function listen
 * @since 1.0.0
 * @category dom
 * @description Adds an event listener to `node`
 * @source https://github.com/expandjs/expandjs/blog/master/lib/listen.js
 *
 * @param {Node | Window} [node] The target node
 * @param {Object | string} [event] The event to listen for
 * @param {Function} [listener] The listener to add
 * @returns {Node | Window} Returns `node`
 */
module.exports = function listen(node, event, listener) {

    // Preparing
    if (!isNode(node) && (isObject(node) || isString(node))) { listener = event; event = node; node = global; }

    // Asserting
    assertArgument(isVoid(node) || isNode(node) || node === global, 1, 'Element or Window');
    assertArgument(isVoid(event) || isObject(event) || isString(event), 2, 'Object or string');
    assertArgument(isVoid(listener) || isFunction(listener), 3, 'Function');

    // Preventing
    if (isVoid(node)) { return node; }

    // Listening
    if (isObject(event)) { Object.keys(event).forEach(key => isFunction(event[key]) && node.addEventListener(key, event[key])); }
    if (isString(event, true) && isFunction(listener)) { node.addEventListener(event, listener); }

    // Returning
    return node;
};
