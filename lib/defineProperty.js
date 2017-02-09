/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const assertArgument = require('./assertArgument'),
    callback         = require('./callback'),
    isFunction       = require('./isFunction'),
    isObject         = require('./isObject'),
    isString         = require('./isString'),
    once             = require('./once');

/**
 * Defines a new own property, or reconfigure existing one, on `object` and returns it.
 * If a function is provided as `object`, its prototype will be used as target.
 *
 * ```js
 * let object = {};
 *
 * XP.defineProperty(object, 'a', {
 *     value: 12,
 *     enumerable: true,
 *     configurable: true
 * });
 * // => {a: 12}
 *
 * XP.defineProperty(obj, 'b', {
 *     set(val) { return val; },
 *     then() { console.log('The value has been set.'); },
 *     enumerable: true,
 *     configurable: true
 * });
 * // => {a: 12, b: (...)}
 *
 * obj.b = 34;
 * // => 'The value has been set.'
 * // => 34
 * ```
 *
 * @function defineProperty
 * @since 1.0.0
 * @category object
 * @description Defines a new own property, or reconfigure existing one, on `object` and returns it
 * @source https://github.com/expandjs/expandjs/blog/master/lib/defineProperty.js
 *
 * @param {Function | Object} object The target object
 * @param {string} name The property name
 * @param {Function | Object} opt The options to be set on the property
 *   @param {boolean} [opt.enumerable = true] Specifies if the property should show up in a for...in loop or not
 *   @param {boolean} [opt.frozen = false] Specifies if the property value should be automatically frozen
 *   @param {Function} [opt.get] The property's getter
 *   @param {boolean} [opt.callback = false] Specifies if the property will be a function with callback support
 *   @param {boolean} [opt.sealed = false] Specifies if the property value should be automatically sealed
 *   @param {Function} [opt.set] The property's setter
 *   @param {boolean} [opt.static = false] Specifies if the property should be static
 *   @param {Function} [opt.then] A callback called after the property has been set
 *   @param {Function} [opt.validate] A function called to validate the value before being set
 *   @param {*} [opt.value] The value of the property
 *   @param {boolean} [opt.writable = true] Specifies if the property will not be reassignable
 * @returns {Function | Object} Returns the modified object
 */
module.exports = function defineProperty(object, name, opt) {

    // Asserting
    assertArgument(isFunction(object) || isObject(object), 1, 'Function or Object');
    assertArgument(isString(name, true), 2, 'string');
    assertArgument(isFunction(opt) || isObject(opt), 3, 'Function or Object');

    // Preparing
    opt            = isFunction(opt) ? {value: opt} : opt;
    opt.defined    = false;
    opt.enumerable = opt.hasOwnProperty('enumerable') ? opt.enumerable : true;
    opt.writable   = opt.hasOwnProperty('writable') ? opt.writable : true;

    // Let
    let func        = opt.value,
        isGetter    = isFunction(opt.get),
        isSetter    = isFunction(opt.set),
        isValidated = isFunction(opt.validate),
        isConstant  = !isGetter && !isSetter;

    // Overriding
    if (isConstant && opt.callback) { opt.value = function () { return func.apply(this, callback(arguments, func)); }; }
    if (isConstant && opt.once) { opt.value = once(opt.value); }
    if (isGetter && !isSetter) { opt.set = function () {}; }
    if (isSetter && !isGetter && !isValidated) { opt.validate = function () {}; }
    if (isFunction(object) && !opt['static']) { object = object.prototype; }

    // Defining
    Object.defineProperty(object, name, Object.assign({
        configurable: isFunction(opt.value),
        enumerable: opt.enumerable
    }, isConstant ? {
        value: opt.value,
        writable: opt.writable
    } : {
        get: isGetter ? opt.get : function () { return this[`${name}_`]; },
        set: isGetter ? opt.set : function (val) {
            let key = `${name}_`, pre = this[key], post = opt.set.call(this, val), type = opt.validate.call(this, post);
            if (type) { throw new Error(`"${name}" must be ${type}`); }
            if (opt.defined = opt.defined || this.hasOwnProperty(key)) { this[key] = post; } else { Object.defineProperty(this, key, {configurable: opt.defined = true, enumerable: opt.enumerable, writable: true, value: post}); }
            if (opt.sealed) { Object.seal(post); }
            if (opt.frozen) { Object.freeze(post); }
            if (opt.then) { opt.then.call(this, post, pre); }
        }
    }));

    // Freezing
    if (isConstant && opt.sealed) { Object.seal(object[name]); }
    if (isConstant && opt.frozen) { Object.freeze(object[name]); }

    // Returning
    return object;
};
