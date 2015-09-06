'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function() {
  var content = fs.readFileSync(
    path.resolve(__dirname, '../templates/help.txt'), 'utf8');
  console.log(content);
};
