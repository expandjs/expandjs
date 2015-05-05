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

    var isString       = require('../tester/isString'),
        toQueryString  = require('../caster/toQueryString');

    /**
     * Returns a URL representation of `target`. A second parameter can be passed
     * to be transformed in a query string for the URL representation.
     *
     * ```js
     *      XP.toURL('www.expandjs.com')
     *      // => "www.expandjs.com"
     *
     *      XP.toURL('www.expandjs.com', {first: 1, second: 2})
     *      // => "www.expandjs.com?first=1&second=2"
     *
     *      XP.toURL(123)
     *      // => undefined
     *```
     *
     * @function toURL
     * @param {*} target The value to be transformed.
     * @param {Object} [data] Query string options
     * @returns {string | undefined} Returns the URL representation of `target`.
     */
    module.exports = function toURL(target, data) {
        if (!isString(target, true)) { return; }
        var qs = toQueryString(data);
        return target + (qs ? '?' + qs : '');
    };

}());