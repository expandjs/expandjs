/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The Expand JS Authors. All rights reserved.
 * This code may only be used under the BSD style license found at {{INS-LICENSE}}
 * The complete set of authors may be found at {{INS-AUTHORS}}
 * The complete set of contributors may be found at {{INS-CONTRIBUTORS}}
 */
(function () {
    "use strict";

    // Var
    var dir    = __dirname,
        fs     = require('fs'),
        path   = require('path'),
        name   = path.basename(dir),
        string = 'else if(typeof define==="function"&&define.amd){define([],f)}',
        strip  = function (file) { fs.writeFileSync(file, fs.readFileSync(file, 'utf-8').replace(string, ''), 'utf-8'); };

    // Stripping
    strip(dir + '/dist/' + name + '.js');
    strip(dir + '/dist/' + name + '.min.js');

}());