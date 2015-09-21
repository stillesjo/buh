'use strict';

var help = require('../help');
var logger = require('../logger')('install');
var chalk = require('chalk');

module.exports = function(api, args, out) {
  if (args.help) {
    help(out, 'install');
  } else {
    var repoUri = 'https://github.com/'.concat(args._[0]);
    var to = args._[1];
    api.clone(repoUri, to, function(err) {
      if (err) {
        logger.error(err);
        out(chalk.red('Unable to clone repo ' + args._[0]));
      } else {
        out(chalk.green(args._[0] + ' successfully cloned.'));
      }
    });
  }
};
