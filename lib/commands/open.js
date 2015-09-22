'use strict';
var help = require('../help');
var logger = require('../logger')('open');
var config = require('../config');

module.exports = function(api, args, out) {
  logger.debug(args);
  if (args.help) {
    help(out, 'open');
  } else {
    var url = config.GITHUB_HTTPS_URI + args._[0];
    api.open(url);
  }
};
