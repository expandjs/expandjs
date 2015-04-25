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

    // STEP 1
    (function () {

        // Vars
        var fs     = require('fs'),
            groups = require(__dirname + '/groups');

        // Indexing
        groups.forEach(function (group) {

            // Vars
            var files = fs.readdirSync(__dirname + '/../lib/' + group),
                text  = '';

            // Splicing
            files.splice(files.indexOf('index.js'), 1);

            // Appending
            text += 'module.exports = {';
            files.forEach(function (file, i) { text += '\n    ' + (file  = file.substr(0, file.lastIndexOf('.'))) + ': require("./' + file + '")' + (i < files.length - 1 ? ',' : ''); });
            text += '\n};';

            // Writing
            fs.writeFileSync(__dirname + '/../lib/' + group + '/index.js', text);
        });

        // Logging
        console.log('STEP 1: complete!');
    }());

    // STEP 2
    (function () {

        // Vars
        var fs                = require('fs'),
            constructors      = require(__dirname + '/../lib/constructors'),
            constructorsNames = Object.keys(constructors).sort(),
            methods           = require(__dirname + '/../lib'),
            methodsNames      = Object.keys(methods).sort(),
            text              = '';

        // Build: header
        text += '/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */\n';
        text += '\n';
        text += '(function (global, browser) {\n';
        text += '    "use strict";\n';
        text += '\n';
        text += '    // Vars\n';
        text += '    var ';

        // Build: declaration
        methodsNames.forEach(function (name) {
            text += name + ', ';
        });

        // Build: vars
        text += '\n';
        text += '        exp     = module.exports,\n';
        text += '        lodash  = require("lodash"),\n';
        text += '        q       = require("q");\n';

        // Build: methods
        methodsNames.forEach(function (name) {
            text += '\n';
            text += '    // ' + name.toUpperCase() + '\n';
            text += '    exp.' + name + ' = ' + name + ' = ' + methods[name].toString() + ';\n';
        });

        // Build: browserify
        text += '\n';
        text += '    // Browserify\n';
        text += '    if (browser) {\n';
        text += '        global.XP = module.exports;\n';

        // Build: constructors
        constructorsNames.forEach(function (name) {
            text += '        global.XP' + name + ' = require("../lib/constructors/' + name + '");\n';
        });

        // Build: footer
        text += '    }\n';
        text += '\n';
        text += '}(typeof window !== "undefined" ? window : global, typeof window !== "undefined"));\n';

        // Writing
        fs.writeFileSync(__dirname + '/index.js', text);

        // Logging
        console.log('STEP 2: complete!');
    }());

}());