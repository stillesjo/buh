'use strict';
var expect = require('expect.js');
var open = require('../lib/commands/open');
var helper = require('./testhelper');
var helpText = helper.getOpenHelp();

var helpArgs = {_: [], help: true};

describe('open', function() {
  it('should exist as command in commands', function() {
    var commands = require('../lib/commands');
    expect(commands).to.have.property('open');
    expect(commands.open).to.be.a('function');
  });

  describe('feature', function() {
    it ('should do stuff');
  });

  describe('help', function() {
    it ('should give feedback', function() {
      expect(open).withArgs(undefined, helpArgs,
           helper.throwingMethod).to.throwException(/TESTEXCEPTION/);
    });
    it ('should have help', function() {
      open(undefined, helpArgs,
      function(log) {
        expect(log).to.not.be(undefined);
        expect(log).to.equal(helpText);
      });
    });
  });
});
