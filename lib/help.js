'use strict';
var path = require('path');
var chalk = require('chalk');

module.exports = function(api, argv, out) {
  function buildString(command) {
    var location = 'templates/help';
    if (command && command !== 'help') {
      location = location.concat('-').concat(command);
    }
    return location.concat('.txt');
  }

  function getCommand(argv) {
    if (argv && argv._ && argv._.length > 0) {
      return argv._.shift();
    }
  }

  // Get command
  var command = getCommand(argv);

  // Load string path
  var location = buildString(command);

  // Load and print content of path
  api.getFileContent(
    path.resolve(__dirname, location), function(err, res) {
      if (err) {
        out(chalk.red('No help found for ' + command + '.\n' + err));
      } else {
        out(res);
      }
    });
};
