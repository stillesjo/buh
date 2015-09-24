'use strict';
var path = require('path');

function buildString(argv) {
  var location = 'templates/help';
  if (argv && argv._ && argv._.length > 0) {
    var command = argv._.shift();
    if (command !== 'help') {
      location = location.concat('-').concat(command);
    }
  }
  return location.concat('.txt');
}

module.exports = function(api, argv, out) {
  // Load string path
  var location = buildString(argv);

  // Load and print content of path
  out(api.getFileContent(
    path.resolve(__dirname, location)));
};
