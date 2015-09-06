#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));
var mout = require('mout');
var request = require('request');

var config = require('./lib/config');
var commands = require('./lib/commands');

process.env.INIT_CWD = process.cwd();


var run = function() {
  if (argv._ && argv._.length > 0) {
    var commandName = argv._.shift();
    if (mout.object.has(commands, commandName)) {
      mout.object.get(commands, commandName)(config, request, argv._);
    }
  } else { // No command was specified
    // Print help info
    mout.object.get(commands, 'help')();
  }
};
module.exports = run;
