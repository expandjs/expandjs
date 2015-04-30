/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    //"use strict";

    var assertArgument   = require('../assert/assertArgument'),
        assign           = require('../object/assign'),
        concat           = require('../array/concat'),
        defineProperties = require('../object/defineProperties'),
        flush            = require('../collection/flush'),
        forOwn           = require('../object/forOwn'),
        isArrayable      = require('../tester/isArrayable'),
        isFunction       = require('../tester/isFunction'),
        isObject         = require('../tester/isObject'),
        isString         = require('../tester/isString'),
        isVoid           = require('../tester/isVoid'),
        Promise          = require('../constructors/Promise'),
        pull             = require('../array/pull'),
        push             = require('../array/push'),
        waterfall        = require('../function/waterfall'),
        withdraw         = require('../object/withdraw');

    /**
     * TODO DOC
     *
     * @class Class
     * @param {String} name
     * @param {Object} [opt]
     *   @param {Function} [opt.extends]
     *   @param {Function} [opt.initialize]
     *   @param {Object} [opt.options]
     */
    module.exports = function Class(name, opt) {

        // Asserting
        assertArgument(isString(name, true), 1, 'string');
        assertArgument(isVoid(opt) || isObject(opt), 2, 'Object');

        // Default
        opt = opt || {};

        // Vars
        var Constructor = null,
            Super       = withdraw(opt, 'extends') || Function,
            initialize  = withdraw(opt, 'initialize') || Super,
            options     = withdraw(opt, 'options');

        // Evaluating
        eval('Constructor = function ' + name + '() {' +
             '    var self = this, promised = self.promise;' +
             '    self.options = self.options || Constructor.options;' +
             '    self.plugins = self.plugins || {};' +
             '    self.promise = self.promise || (initialize.promise ? new Promise(arguments, initialize.value, self) : null);' +
             '    return initialize !== Function && (promised || !initialize.promise) ? initialize.apply(self, arguments) : self;' +
             '};');

        // Extending
        Constructor.prototype = Object.create(Super.prototype, {constructor: {configurable: true, value: Constructor, writable: true}});

        // Setting (static properties)
        defineProperties(Constructor, {

            // OPTIONS
            options: {
                'static': true,
                value: assign({}, Super.options, options)
            }
        });

        // Setting (default properties)
        defineProperties(Constructor, {

            /**
             * Adds a plugin to a group
             *
             * @method addPlugin
             * @param {string} group
             * @param {Function} func
             * @returns {Object}
             */
            addPlugin: function (group, func) {
                assertArgument(isString(group, true), 1, 'string');
                assertArgument(isFunction(func), 2, 'Function');
                var self = this;
                push(self.plugins[group] = self.plugins[group] || [], func);
                return self;
            },

            /**
             * Returns a group of plugins
             *
             * @method getPlugins
             * @param {string} group
             * @returns {Array}
             */
            getPlugins: function (group) {
                assertArgument(isString(group, true), 1, 'string');
                return this.plugins ? this.plugins[group] || [] : [];
            },

            /**
             * Invokes a group of plugins
             *
             * @method invokePlugins
             * @param {string} group
             * @param {Array} [args]
             * @param {Function} [callback]
             * @returns {Object}
             */
            invokePlugins: function (group, args, callback) {
                assertArgument(isString(group, true), 1, 'string');
                assertArgument(isVoid(args) || isArrayable(args), 2, 'Arrayable');
                assertArgument(isVoid(callback) || isFunction(callback), 3, 'Function');
                var self = this, func = function (next) { next.apply(undefined, concat([null], args, [self])); };
                waterfall(concat([func], self.getPlugins(group)), callback);
                return self;
            },

            /**
             * Removes a plugin from a group
             *
             * @method removePlugin
             * @param {string} group
             * @param {Function} func
             * @returns {Object}
             */
            removePlugin: function (group, func) {
                assertArgument(isString(group, true), 1, 'string');
                assertArgument(isFunction(func), 2, 'Function');
                var self = this;
                pull(self.getPlugins(group), func);
                return self;
            },

            /**
             * Removes all the plugins from a group
             *
             * @method removePlugins
             * @param {string} group
             * @returns {Object}
             */
            removePlugins: function (group) {
                assertArgument(isString(group, true), 1, 'string');
                var self = this;
                flush(self.getPlugins(group));
                return self;
            },

            /*********************************************************************/

            /**
             * Wraps promise.catch
             *
             * @method rejected
             * @param {Function} callback
             * @returns {Object}
             */
            rejected: function (callback) {
                assertArgument(isFunction(callback), 1, 'Function');
                return assign(this, this.promise ? {promise: this.promise.catch(function (err) { callback(err); throw err; })} : {});
            },

            /**
             * Wraps promise.then
             *
             * @method resolved
             * @param {Function} callback
             * @returns {Object}
             */
            resolved: function (callback) {
                assertArgument(isFunction(callback), 1, 'Function');
                return assign(this, this.promise ? {promise: this.promise.then(function (data) { callback(data); return data; })} : {});
            },

            /*********************************************************************/

            /**
             * TODO DOC
             *
             * @property options
             * @type Object
             */
            options: {
                set: function (val) { return assign(this.options || {}, val); },
                then: function (post) { var self = this; forOwn(post.plugins || {}, function (func, group) { self.addPlugin(group, func); delete post.plugins[group]; }); }
            },

            /**
             * TODO DOC
             *
             * @property plugins
             * @type Object
             */
            plugins: {
                set: function (val) { return assign(this.plugins || {}, val); }
            },

            /**
             * TODO DOC
             *
             * @property promise
             * @type Object
             * @private
             */
            promise: {
                enumerable: false,
                validate: function (val) { return isObject(val) || isVoid(val); }
            },

            /**
             * TODO DOC
             *
             * @property resolver
             * @type Function
             */
            resolver: {
                validate: function (val) { return isFunction(val) || isVoid(val); }
            }
        });

        // Setting (specified properties)
        defineProperties(Constructor, opt);

        return Constructor;
    };

}());