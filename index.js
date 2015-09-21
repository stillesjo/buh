#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));
var mout = require('mout');

var commands = require('./lib/commands');

process.env.INIT_CWD = process.cwd();


function help(out) {
  mout.object.get(commands, 'help')(out);
}

var run = function(out, api) {
  if (argv._ && argv._.length > 0) {
    var commandName = argv._.shift();
    if (mout.object.has(commands, commandName)) {
      mout.object.get(commands, commandName)(api, argv, out);
    } else {
      help(out);
    }
  } else { // No command was specified
    // Print help info
    help(out);
  }
};
module.exports = run;
