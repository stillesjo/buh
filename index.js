#!/usr/bin/env node
'use strict';

var pack = require('./package');

var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));
var mout = require('mout');
var commands = require('./lib/commands');

process.env.INIT_CWD = process.cwd();


var run = function() {
  //if (version)
  //  console.log("Running version " + pack.version);
  if (argv._ && argv._.length >0) {
    var commandName = argv._.shift();
    mout.object.get(commands, commandName)(argv._);
  } 
};
module.exports = run;
