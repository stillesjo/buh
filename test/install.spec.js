'use strict';
var expect = require('chai').expect;

var install = require('../lib/commands/install');
var helper = require('./testhelper');
var repoName = 'stillesjo/buh';
var gitSuffix = '.git';
var expectedUriHttps = 'https://github.com/' + repoName + gitSuffix;
var expectedUriGit = 'git@github.com:' + repoName + gitSuffix;
var temporaryPath = 'verytemporarypath...';
var installGithubRepository = {_: [repoName]};
var installGithubRepositorySsh = {_: [repoName], ssh: true };
var installGithubRepositoryPath = {_: [repoName, temporaryPath] };


describe('install', function() {
  describe('feature', function() {
    it ('should run api method', function() {
      expect(install).withArgs({ clone: helper.throwingMethod },
        installGithubRepository, undefined)
        .to.throwException(/TESTEXCEPTION/);
    });
    it ('should combine repository to a repository url', function() {
      install({ clone:
        function(url) {
          expect(url).to.equal(expectedUriHttps);
        },}, installGithubRepository, undefined);
    });
    it ('should use ssh-url when ssh-flag is on', function() {
      install({ clone:
              function(url) {
        expect(url).to.equal(expectedUriGit);
      },}, installGithubRepositorySsh, undefined);
    });
    it ('should handle a path', function() {
      install({ clone: function() {
        return null;
      },},
              installGithubRepositoryPath, function(log) {
                expect(log).to.contain(temporaryPath);
              });
    });
    it ('should not call api when no repo specified', function() {
      install({ clone: function() {
        expect().fail('Should not call clone function');
      },}, {_: []}, function(log) {
        expect(log).to.be.ok();
      });
    });
  });
});
