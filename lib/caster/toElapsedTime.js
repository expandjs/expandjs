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

    var isFinite = require('../tester/isFinite'),
        mapOne   = require('../collection/mapOne');

    /**
     * Returns a human readable representation of `target`.
     *
     * ```js
     *  XP.toElapsedTime(Date.now())
     *  // => 'now'
     *
     *  XP.toElapsedTime(Date.now() - 10000)
     *  // => '10 seconds ago'
     *
     *  XP.toElapsedTime(Date.now() - 60000)
     *  // => '1 minute ago'
     * ```
     *
     * @function toElapsedTime
     * @param {*} target The value to be transformed.
     * @returns {string | undefined} Returns the transformed target.
     */
    module.exports = function toElapsedTime(target) {

        // Checking
        if (!isFinite(target)) { return; }

        // Vars
        var elapsed = Math.floor((Date.now() - target) / 1000),
            times   = [
                {label: 'year', value: 31536000},
                {label: 'month', value: 2592000},
                {label: 'day', value: 86400},
                {label: 'hour', value: 3600},
                {label: 'minute', value: 60},
                {label: 'second', value: 1}
            ];

        // Casting
        return elapsed < 0 ? '' : (!elapsed ? 'now' : mapOne(times, function (time) {
            var current = Math.floor(elapsed / time.value);
            return current ? current + ' ' + time.label + (current > 1 ? 's' : '') + ' ago' : undefined;
        }));
    };

}());