'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(logger) {
  logger(fs.readFileSync(
    path.resolve(__dirname, '../templates/help.txt'), 'utf8'));
};
