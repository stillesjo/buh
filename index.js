#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));
var logger = require('./lib/logger')('index.js');
var mout = require('mout');

var commands = require('./lib/commands');

process.env.INIT_CWD = process.cwd();

var run = function(out, api) {
  logger.debug(argv);
  if (argv._ && argv._.length > 0 && !argv.help) {
    var commandName = argv._.shift();
    if (mout.object.has(commands, commandName)) {
      mout.object.get(commands, commandName)(api, argv, out);
    } else {
      mout.object.get(commands, 'help')(api, argv, out);
    }
  } else { // No command was specified
    // Print help info
    mout.object.get(commands, 'help')(api, argv, out);
  }
};
module.exports = run;
