'use strict';
var expect = require('expect.js');

var install = require('../lib/commands/install');
var helper = require('./testhelper');
var installInputHelp = {help: true};
var installGithubRepository = {_: ['stillesjo/buh']};

var throwingApi = { clone: function() {
  throw 'TESTEXCEPTION';
},};

describe('install', function() {
  describe('feature', function() {
    it ('should run api method', function() {
      expect(install).withArgs(throwingApi,
        installGithubRepository, undefined)
        .to.throwException(/TESTEXCEPTION/);
    });
  });
  describe('install help', function() {
    it('should return helptext', function() {
      install(null, installInputHelp, function(output) {
        expect(output).to.not.be(undefined);
        expect(output).to.be.a('string');
        expect(output).to.equal(helper.getInstallHelp());
      });
    });
  });
});
