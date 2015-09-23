'use strict';
var fs = require('fs');
var path = require('path');

function buildString(mod) {
  var location = 'templates/help';
  if (mod) {
    location = location.concat('-').concat(mod);
  }
  return location.concat('.txt');
}

module.exports = function(api, argv, out) {
  var mod = (argv && argv._) ? argv._.shift() : undefined; 
  // Load string path
  var location = buildString(mod);

  // Load and print content of path
  out(fs.readFileSync(
    path.resolve(__dirname, location), 'utf8'));
};
