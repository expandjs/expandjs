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
        isElement      = require('../tester/isElement'),
        isString       = require('../tester/isString'),
        toNumber       = require('../caster/toNumber');

    /**
     * Returns the value an input element.
     *
     * @function getValue
     * @param {Element} element The reference element
     * @param {boolean} casted Specify if value has to be casted, useful for json format.
     * @returns {boolean | number | string | undefined} The casted element's value.
     */
    module.exports = function getValue(element, casted) {
        assertArgument(isElement(element), 1, 'Element');
        if (element.disabled || !element.name) { return undefined; }
        if (element.type === 'checkbox') { return casted && element.value === 'on' ? !!element.checked : (element.checked ? element.value : undefined); }
        if (element.type === 'radio') { return element.checked ? element.value : undefined; }
        if (element.type === 'number' || element.type === 'range') { return casted ? (element.value ? toNumber(element.value) : null) : element.value; }
        if (element.type !== 'file' && isString(element.value)) { return element.value; }
    };

}());