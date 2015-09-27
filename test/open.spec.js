'use strict';
/*jshint -W030 */
var expect = require('chai').expect;
var open = require('../lib/commands/open');
var helper = require('./testhelper');
var openArgs = {_: ['stillesjo/dotfiles']};
var expectedUrl = 'https://github.com/stillesjo/dotfiles';
var openArgsNoRepo = {_: []};
var openArgsWithBrowser = {_: ['stillesjo/dotfiles'], browser: 'firefox'};

describe('open', function() {
  it('should exist as command in commands', function() {
    var commands = require('../lib/commands');
    expect(commands).to.have.property('open');
    expect(commands.open).to.be.a('function');
  });

  describe('feature', function() {
    it ('should run api method open', function() {
      expect(function() {
        open({open: helper.throwingMethod},
      openArgs, undefined);
      }).to.throw(/TESTEXCEPTION/);
    });
    it ('should construct a valid url', function() {
      open({open: function(openUrl, browser) {
        expect(openUrl).to.equal(expectedUrl);
        expect(browser).to.be.undefined;
      },}, openArgs, function() {});
    });
    it ('should give error message when no repo specified', function() {
      open({open: function(url) {
        expect().fail('Should not run open on api. url:' + url);
      },}, openArgsNoRepo, function(logMessage) {
        expect(logMessage).to.be.ok;
      });
    });
    it ('should accept browser as argument', function() {
      open({ open: function(url, browser) {
        expect(browser).to.not.be.undefined;
      },}, openArgsWithBrowser, function() {});
    });
  });
});
