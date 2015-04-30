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

    var assertArgument = require('../assert/assertArgument'),
        isObject       = require('../tester/isObject'),
        isString       = require('../tester/isString'),
        isVoid         = require('../tester/isVoid'),
        withdraw       = require('../object/withdraw');

    /**
     * TODO DOC
     *
     * @class Mixin
     * @param {string} name
     * @param {Object} [prototype]
     */
    module.exports = function Mixin(name, prototype) {

        // Asserting
        assertArgument(isString(name, true), 1, 'string');
        assertArgument(isVoid(prototype) || isObject(prototype), 2, 'Object');

        // Vars
        var Polymer     = global.Polymer,
            Constructor = module.exports.Mixin || module.exports,
            cached      = Constructor.cached = Constructor.cached || {},
            mixins      = withdraw(prototype || {}, 'mixins') || [],
            final       = mixins.length ? {} : prototype;

        // Checking
        if (!Polymer || !prototype) { return cached[name]; }

        // Pushing
        if (mixins.length) { mixins.push(prototype); }

        // Mixing
        mixins.forEach(function (mixin) { Polymer.mixin(final, isString(mixin) ? new Constructor(mixin) : mixin); });

        // Deleting
        delete final.computed;
        delete final.eventDelegates;
        delete final.observe;
        delete final.publish;

        // Caching
        cached[name] = final;

        return final;
    };

}(typeof window !== "undefined" ? window : global));