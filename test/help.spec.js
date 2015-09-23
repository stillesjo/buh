'use strict';
var expect = require('expect.js');

var help = require('../lib/commands/help');
var helper = require('./testhelper');
var path = require('path');

var helpPath = path.resolve('../lib/templates/help.txt');

describe('Help', function() {
  it ('should log text when executed', function() {
    help({getFileContent: function(path) {
      expect(path).to.not.equal(helpPath);
    },}, {_: []}, function() {});
  });
});
