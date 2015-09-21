'use strict';

var help = require('../help');
var logger = require('../logger')('install');
var chalk = require('chalk');

function getPrefix(args) {
  return args.ssh ? 'git@github.com:' :
    'https://github.com/';
}

function to(arg) {
  if (arg) {
    return (' to ' + arg + '.');
  } else {
    return '.';
  }
}

module.exports = function(api, args, out) {
  if (args.help) {
    help(out, 'install');
  } else {
    var repoUri = getPrefix(args).concat(args._[0]).concat('.git');
    var _to = args._[1];
    api.clone(repoUri, _to, function(err) {
      if (err) {
        logger.error(err);
        out(chalk.red('Unable to clone repo ' + args._[0]));
      } else {
        out(chalk.green(args._[0] + ' successfully cloned' + to(_to)));

      }
    });
  }
};
