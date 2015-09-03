#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));
var mout = require('mout');
var config = require('./lib/config');
var commands = require('./lib/commands');
var request = require('request');

process.env.INIT_CWD = process.cwd();


var run = function() {
  if (argv._ && argv._.length > 0) {
    var commandName = argv._.shift();
    mout.object.get(commands, commandName)(config, request, argv._);
  }
};
module.exports = run;
