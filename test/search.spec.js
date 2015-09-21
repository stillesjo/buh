'use strict';
var expect = require('expect.js');

var search = require('../lib/commands/search');
var helper = require('./testhelper');

// Setup data
var searchInput = {_: ['keyword']};
var searchInputWithUserArg = {_: searchInput._, user: 'stillesjo'};
var searchInputWithLanguageArg = {_: searchInput._, language: 'alexscript'};
var searchInputWithHelpArg = {_: searchInput._, help: true};

describe('search', function() {
  describe('searching function', function() {
    it ('should take keywords', function() {
      search({search: function(query) {
        expect(query)
          .to.contain(searchInput._[0]);
        expect(query)
          .to.not.contain(searchInputWithUserArg.user);
        expect(query)
          .to.not.contain(searchInputWithLanguageArg.language);
      },
      }, searchInput, null);
    });
    it ('should take --user flag', function() {
      search({search: function(query) {
        expect(query)
          .to.contain(searchInput._[0]);
        expect(query)
          .to.contain(searchInputWithUserArg.user);
        expect(query)
          .to.not.contain(searchInputWithLanguageArg.language);
      },}, searchInputWithUserArg, null);
    });
    it ('should take --language flag', function() {
      search({search: function(query) {
        expect(query)
          .to.contain(searchInput._[0]);
        expect(query)
          .to.not.contain(searchInputWithUserArg.user);
        expect(query)
          .to.contain(searchInputWithLanguageArg.language);
      },}, searchInputWithLanguageArg, null);
    });
  });

  describe('help function', function() {
    it ('should return helptext', function() {
      search(null, searchInputWithHelpArg, function(searchString) {
        expect(searchString).to.be.a('string');
        expect(searchString).to.equal(helper.getSearchHelp());
      });
    });
  });
});
