'use strict';

var path = require('path');
var fs = require('fs');

var fetch = function(location) {
  return fs.readFileSync(
    path.resolve(__dirname, location), 'utf8');
};

module.exports = {
  getSearchHelp: function() {
    return fetch('../lib/templates/help-search.txt');
  },
  getInstallHelp: function() {
    return fetch('../lib/templates/help-install.txt');
  },
  getHelp: function() {
    return fetch('../lib/templates/help.txt');
  },
};
