/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function (global) {
    "use strict";

    var isInstance = require('../tester/isInstance'),
        isVoid     = require('../tester/isVoid');

    /**
     * Checks if `value` is instance of `Event`.
     *
     * @function isEvent
     * @param {*} value The value to check.
     * @param {string} [type] Specifies the event type to check.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isEvent(value, type) {
        return isInstance(value, global.Event) && (isVoid(type) || value.type === type);
    };

}(typeof window !== "undefined" ? window : global));