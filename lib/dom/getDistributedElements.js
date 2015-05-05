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
        filter         = require('../collection/filter'),
        isElement      = require('../tester/isElement'),
        toDOMPredicate = require('../caster/toDOMPredicate'),
        filterElements = require('../dom/filterElements');

    /**
     * Returns the distributed nodes of an element, filtered by
     * `identity`. A third parameter can be specified to filter
     * the nodes before applying the identity check.
     *
     * @function getDistributedElements
     * @param {Element} element The <content> element to search.
     * @param {Function | string} [identity] The identity of the nodes to be found.
     * @param {Function | string} [predicate] The filter to be applied before applying the identity check.
     * @returns {Array} Returns the list of found elements.
     */
    module.exports = function getDistributedElements(element, identity, predicate) {
        var casted = toDOMPredicate(identity);
        assertArgument(isElement(element), 1, 'Element');
        assertArgument(casted, 2, 'Function or string');
        return filter(filterElements(element.getDistributedNodes(), predicate), casted);
    };

}());