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

module.exports = function(logger, mod) {
  // Load string path
  var location = buildString(mod);

  // Load and print content of path
  logger(fs.readFileSync(
    path.resolve(__dirname, location), 'utf8'));
};
