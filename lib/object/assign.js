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
        ary            = require('../function/ary'),
        assertArgument = require('../assert/assertArgument'),
        isObject       = require('../tester/isObject'),
        filter         = require('../collection/filter');

    /**
     * Assigns own enumerable properties of source object(s) to the destination object.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * ```js
     * XP.assign({user: 'barney'}, {age: 40}, {user: 'fred'});
     * // => {user: 'fred', age: 40}
     * ```
     *
     * @function assign
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     */
    module.exports = function assign(object, sources) {
        assertArgument(isObject(object), 1, 'Object');
        return lodash.assign.apply(lodash, filter(arguments, ary(isObject, 1)));
    };

}());