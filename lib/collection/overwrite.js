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
        forOwn         = require('../object/forOwn'),
        isArray        = require('../tester/isArray'),
        isArrayable    = require('../tester/isArrayable'),
        isCollection   = require('../tester/isCollection'),
        isEnumerable   = require('../tester/isEnumerable'),
        isObject       = require('../tester/isObject'),
        toArray        = require('../caster/toArray');

    /**
     * Substitutes all own properties of `collection` with properties from the
     * second passed collection, `other`, and returns the modified `collection`.
     *
     * ```js
     *     var obj1 = {first: 1, second: 2},
     *         obj2 = {first: 'one', third: 'three'},
     *         arr1 = [1, 2, 3],
     *         arr2 = ['one'];
     *
     *     XP.overwrite(obj1, obj2);
     *     // => {first: 'one', third: 'three'}
     *
     *     XP.overwrite(arr1, arr2);
     *     // => ['one']
     *```
     *
     * @function overwrite
     * @param {Array | Object} collection The destination collection.
     * @param {Array | Object} other The source collection.
     * @returns {Array | Object} The modified `collection`
     */
    module.exports = function overwrite(collection, other) {
        assertArgument(isCollection(collection = toArray(collection) || collection), 1, 'Arrayable or Object');
        assertArgument(isArray(collection) ? isArrayable(other) : isObject(other), 2, isArray(collection) ? 'Arrayable' : 'Object');
        if (isArray(collection)) { forEach(other, function (val, i) { collection[i] = val; }); if (collection.length > other.length) { collection.splice(other.length, collection.length - other.length); } }
        if (isObject(collection)) { forOwn(collection, function (val, key) { if (!isEnumerable(key, other)) { delete collection[key]; } }); forOwn(other, function (val, key) { collection[key] = val; }); }
        return collection;
    };

}());