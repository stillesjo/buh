'use strict';

var config = require('./config');
var bunyan = require('bunyan');
var formatter = require('bunyan-format');
var format = formatter(config.loggingConfigs);


module.exports = function(name) {
  return bunyan.createLogger({
    name: (config.logPrefix + name),
    streams: [
      { level: 'trace', stream: format },
      { level: 'error', path: config.logfile },
    ],
  });
};
