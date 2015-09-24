'use strict';
var logger = require('../logger')('open');
var config = require('../config');

module.exports = function(api, args, out) {
  logger.debug(args);
  if (args._[0]) {
    var url = config.GITHUB_HTTPS_URI + args._[0];
    api.open(url);
  } else {
    out('Cannot open repository. No repository specified.');
  }
};
