'use strict';
var expect = require('expect.js');

var help = require('../lib/commands/help');
var helper = require('./testhelper');

describe('Help', function() {
  it ('should log text when executed', function() {
    help(function(logText) {
      expect(logText).to.be.a('string');
      expect(logText).to.equal(helper.getHelp());
    });
  });
});
