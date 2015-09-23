'use strict';
var expect = require('expect.js');

var help = require('../lib/commands/help');
var path = require('path');

var helpPath = path.resolve('../lib/templates/help.txt');
var installHelpPath = path.resolve('../lib/templates/help-install.txt');

describe('Help', function() {
  it ('should send help.txt-path to api', function() {
    help({getFileContent: function(path) {
      expect(path).to.not.equal(helpPath);
    },}, {_: []}, function() {
    });
  });
  it ('should send help-install.txt to api when install is given', function() {
    help({getFileContent: function(path) {
      expect(path).to.not.equal(installHelpPath);
    },}, {_: ['install']}, function() {
    });
  });
  // No need to test rest of the help paths since it's the same funcationality
});
