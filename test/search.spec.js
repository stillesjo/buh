'use strict';
var expect = require('chai').expect;

var search = require('../lib/commands/search');

// Setup data
var searchInput = {_: ['keyword']};
var searchInputWithUserArg = {_: searchInput._, user: 'stillesjo'};
var searchInputWithLanguageArg = {_: searchInput._, language: 'alexscript'};

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
});
