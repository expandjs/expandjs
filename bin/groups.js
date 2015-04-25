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

    // Vars
    var fs  = require('fs'),
        exp = module.exports = [];

    // Exporting
    fs.readdirSync(__dirname + '/../lib').forEach(function (dir) {
        var stat = fs.statSync(__dirname + '/../lib/' + dir);
        if (stat.isDirectory()) { exp.push(dir); }
    });

}());