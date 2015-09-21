'use strict';
var expect = require('expect.js');

var install = require('../lib/commands/install');
var helper = require('./testhelper');
var installInputHelp = {help: true};
var repoName = 'stillesjo/buh';
var gitSuffix = '.git';
var expectedUriHttps = 'https://github.com/' + repoName + gitSuffix;
var expectedUriGit = 'git@github.com:' + repoName + gitSuffix;
var installGithubRepository = {_: [repoName]};
var installGithubRepositorySsh = {_: [repoName], ssh: true };

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
    it ('should combine repository to a repository url', function() {
      install( { clone:
        function(url) {
          expect(url).to.equal(expectedUriHttps);
        }}, installGithubRepository, undefined);
    });
    it ('should use ssh-url when ssh-flag is on', function() {
      install({ clone:
              function(url) {
        expect(url).to.equal(expectedUriGit);
      }}, installGithubRepositorySsh, undefined);
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
