'use strict';
var expect = require('expect.js');
var open = require('../lib/commands/open');
var helper = require('./testhelper');
var openArgs = {_: ['stillesjo/dotfiles']};
var expectedUrl = 'https://github.com/stillesjo/dotfiles';
var openArgsNoRepo = {_: []};

describe('open', function() {
  it('should exist as command in commands', function() {
    var commands = require('../lib/commands');
    expect(commands).to.have.property('open');
    expect(commands.open).to.be.a('function');
  });

  describe('feature', function() {
    it ('should run api method open', function() {
      expect(open).withArgs({open: helper.throwingMethod},
                            openArgs, undefined)
                            .to.throwException(/TESTEXCEPTION/);
    });
    it ('should construct a valid url', function() {
      open({open: function(openUrl) {
        expect(openUrl).to.equal(expectedUrl);
      },}, openArgs, function() {});
    });
    it ('should give error message when no repo specified', function() {
      open({open: function(url) {
        expect().fail('Should not run open on api. url:' + url);
      },}, openArgsNoRepo, function(logMessage) {
        expect(logMessage).to.be.ok();
      });
    });
  });
});