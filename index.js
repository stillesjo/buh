#!/usr/bin/env node
'use strict'

var Liftoff = require('liftoff');

var argv = require('minimist')(process.argv.slice(2));

process.env.INIT_CWD = process.cwd();

console.log(require('./package'));


//
var cli = new Liftoff({
  name: 'buh'
})

var run = function() {
  console.log(argv);
  console.log(argv.gulpfile);
  cli.launch({}, function(env) {
    console.log(env);
  });
}
module.exports = run;
