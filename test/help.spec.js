//var assert = require('assert');
var expect = require('expect.js');

var help = require('../lib/commands/help');

describe('Help', function() {
  it ('should log text when executed', function() {
    help(function(logText) {
      expect(logText).to.be.a('string');
      expect(logText.length).to.be.greaterThan(0);
    });
  });
})
