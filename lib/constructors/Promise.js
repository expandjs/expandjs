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
        Deferred       = require('../constructors/Deferred'),
        fit            = require('../array/fit'),
        isArray        = require('../tester/isArray'),
        isBindable     = require('../tester/isBindable'),
        isFunction     = require('../tester/isFunction'),
        toArray        = require('../caster/toArray');

    /**
     * TODO DOC
     *
     * @class Promise
     * @param {Array} args
     * @param {Function} func
     * @param {Array | Function | Object} [thisArg]
     */
    module.exports = function Promise(args, func, thisArg) {

        // Asserting
        assertArgument(args = toArray(args), 1, 'Arrayable');
        assertArgument(isFunction(func), 2, 'Function');
        assertArgument(isBindable(thisArg), 3, 'Array, Function or Object');

        // Vars
        var callback, i, n,
            deferred = new Deferred(),
            promise  = deferred.promise;

        // Preparing
        if (isArray(args = fit(args, func.length), true)) {
            for (n = args.length - 1, i = n; i >= 0; i -= 1) {
                if (isFunction(args[i])) {
                    for (callback = args[i]; i < n; i += 1) {
                        args[i] = undefined;
                    }
                    break;
                }
            }
            args[n] = function (error, data) { deferred[error ? 'reject' : 'resolve'](error || data); };
        }

        // Applying
        func.apply(thisArg, args);

        // Catching
        if (callback) { promise = promise.then(function (data) { callback(null, data); return data; }); }
        if (callback) { promise = promise.catch(function (error) { callback(error, null); throw error; }); }

        return promise;
    };

}());