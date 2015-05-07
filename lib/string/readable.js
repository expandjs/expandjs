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
        capitalize     = require('../string/capitalize'),
        isString       = require('../tester/isString'),
        isVoid         = require('../tester/isVoid'),
        snakeCase      = require('../string/snakeCase');

    /**
     * Converts `string` to a readable case.
     * See [Wikipedia](https://en.wikipedia.org/wiki/Letter_case) for more details.
     *
     * ```js
     *     XP.readable('Foo Bar');
     *     // => 'Foo bar'
     *
     *     XP.readable('fooBar');
     *     // => 'Foo bar'
     *
     *     XP.readable('__foo_bar__');
     *     // => 'Foo bar'
     * ```
     *
     * @function readable
     * @param {string} [string = ""] The string to convert.
     * @returns {string} Returns the readable string.
     */
    module.exports = function readable(string) {
        assertArgument(isVoid(string) || isString(string), 1, 'string');
        return string ? capitalize(snakeCase(string).replace(/_/g, ' ')) : '';
    };

}());