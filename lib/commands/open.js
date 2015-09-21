'use strict';
var help = require('../help');
var logger = require('../logger')('open');

module.exports = function(api, args, out) {
  logger.debug(args);
  if (args.help) {
    help(out, 'open');
  }
};
