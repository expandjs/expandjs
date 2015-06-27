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
        forEach        = require('../collection/forEach'),
        isCollection   = require('../tester/isCollection'),
        isDefined      = require('../tester/isDefined'),
        isFunction     = require('../tester/isFunction'),
        isObject       = require('../tester/isObject'),
        isString       = require('../tester/isString'),
        toArray        = require('../caster/toArray');

    /**
     * Runs each element in `collection` through `iteratee`.
     * It stops on the first defined result of iteratee and returns it.
     *
     * ```js
     * var arr = [1, 2, 3];
     *
     * XP.mapOne(arr, function(n) { if (n > 2) { return n * 3; } });
     * // => 9
     *
     * XP.mapOne(arr, function(n) { if(n > 5) { return n * 3; } });
     * // => undefined
     * ```
     *
     * @function mapOne
     * @param {Array | Object} collection The collection to search.
     * @param {Function | Object | string} iteratee The function invoked per iteration.
     * @returns {*} Returns the mapped value, if found, otherwise undefined.
     */
    module.exports = function mapOne(collection, iteratee) {
        assertArgument(isCollection(collection = toArray(collection) || collection), 1, 'Arrayable or Object');
        assertArgument(isFunction(iteratee) || isObject(iteratee) || isString(iteratee), 2, 'Function, Object or string');
        var result;
        forEach(collection, function (val, key, coll) { return !isDefined(result = iteratee(val, key, coll)); });
        return result;
    };

}());