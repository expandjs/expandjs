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
        isString       = require('../tester/isString'),
        isVoid         = require('../tester/isVoid'),
        url            = require('url');

    /**
     * Parses a URL string, returning an object.
     * Pass true as the second argument to also parse the query string using the querystring module.
     * Pass true as the third argument to treat //foo/bar as `{host: 'foo', pathname: '/bar'}` rather than `{pathname: '//foo/bar'}`.
     *
     * ```js
     *     XP.parseURL('http://www.example.com:3000/path?name=Bear&surname=Grylls#hash');
     *     // => {
     *         protocol: 'http:',
     *         slashes: true,
     *         auth: null,
     *         host: 'www.example.com:3000',
     *         port: '3000',
     *         hostname: 'www.example.com',
     *         hash: '#hash',
     *         search: '?name=Bear&surname=Grylls',
     *         query: 'name=Bear&surname=Grylls',
     *         pathname: '/path',
     *         path: '/path?name=Bear&surname=Grylls',
     *         href: 'http://www.example.com:3000/path?name=Bear&surname=Grylls#hash'
     *     }
     *
     *     XP.parseURL('http://Bear:Grylls@example.com:3000/path#hash', true);
     *     // => {
     *         protocol: 'http:',
     *         slashes: true,
     *         auth: 'Bear:Grylls',
     *         host: 'example.com:3000',
     *         port: '3000',
     *         hostname: 'example.com',
     *         hash: '#hash',
     *         search: '',
     *         query: {},
     *         pathname: '/path',
     *         path: '/path',
     *         href: 'http://Bear:Grylls@example.com:3000/path#hash'
     *     }
     *
     *     XP.parseURL('');
     *     // => undefined
     * ```
     *
     * @function parseURL
     * @param {string} [string = ""] The string to parse.
     * @param {boolean} [parseQuery = false] If set to true, the query string is also parsed.
     * @param {boolean} [slashesDenoteHost = false] If set to true, treat //foo/bar as `{host: 'foo', pathname: '/bar'}`.
     * @returns {Object} Returns the parsed value as object.
     */
    module.exports = function parseURL(string, parseQuery, slashesDenoteHost) {
        assertArgument(isVoid(string) || isString(string), 1, 'string');
        return string ? url.parse(string, !!parseQuery, !!slashesDenoteHost) : undefined;
    };

}());