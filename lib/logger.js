'use strict';

;(function() {
  var config = require('./config');
  var bunyan = require('bunyan');
  var formatter = require('bunyan-format');
  var format = formatter(config.loggingConfigs);

  var streams = [{level: config.consoleLogLevel, stream: format }];
  if (config.logToFile)
    streams.push( { level: 'error', path: config.logfile } );

  module.exports = function(name) {
    return bunyan.createLogger({
      name: (config.logPrefix + name),
      streams: streams,
    });
  };
})()
