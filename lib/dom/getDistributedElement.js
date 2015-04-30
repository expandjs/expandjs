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
        filterElements = require('../dom/filterElements'),
        find           = require('../collection/find'),
        isElement      = require('../tester/isElement'),
        toDOMIdentity  = require('../caster/toDOMIdentity');

    /**
     * Returns the first distributed node of an element, that matches
     * the passed `identity`. A third parameter can be specified to
     * filter the nodes before applying the identity check.
     *
     * @function getDistributedElement
     * @param {Element} element The <content> element to search.
     * @param {Element | Function | string} identity The identity of the node to be found.
     * @param {Function | string} [predicate] The filter to be applied before applying the identity check.
     * @returns {Element | undefined} The found element or undefined.
     */
    module.exports = function getDistributedElement(element, identity, predicate) {
        var casted = toDOMIdentity(identity);
        assertArgument(isElement(element), 1, 'Element');
        assertArgument(casted, 2, 'Element, Function or string');
        return find(filterElements(element.getDistributedNodes(), predicate), casted);
    };

}());