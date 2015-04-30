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
        Mixin          = require('../constructors/Mixin'),
        withdraw       = require('../object/withdraw');

    /**
     * TODO DOC
     *
     * @class Element
     * @param {Object} prototype
     */
    module.exports = function Element(prototype) {

        // Asserting
        assertArgument(isObject(prototype), 1, 'Object');

        // Vars
        var Polymer = global.Polymer,
            mixins  = withdraw(prototype, 'mixins') || [],
            final   = mixins.length ? {} : prototype;

        // Checking
        if (!Polymer) { return; }

        // Pushing
        if (mixins.length) { mixins.push(prototype); }

        // Mixing
        mixins.forEach(function (mixin) { Polymer.mixin(final, isString(mixin) ? new Mixin(mixin) : mixin); });

        // Registering
        return Polymer(final);
    };

}(typeof window !== "undefined" ? window : global));