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

    var lodash         = require('lodash'),
        assertArgument = require('../assert/assertArgument'),
        concat         = require('../array/concat'),
        slice          = require('../array/slice'),
        toArray        = require('../caster/toArray');

    /**
     * Removes all provided values from `array` using `SameValueZero` for equality comparisons.
     *
     * ```js
     *     var arr = [1, 2, 3, 2, 5];
     *
     *     XP.pull(arr, 2);
     *     // => [1, 3, 5]
     *
     *     console.log(arr);
     *     // => [1, 3, 5];
     *
     *     XP.pull(arr, 3, 5);
     *     // => [1]
     * ```
     *
     * @function pull
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     */
    module.exports = function pull(array, values) {
        assertArgument(array = toArray(array), 1, 'Arrayable');
        return lodash.pull.apply(lodash, concat([array], slice(arguments, 1)));
    };

}());