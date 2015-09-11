var expect = require('expect.js');
var _ = require('lodash');

var search = require('../lib/commands/search');


// Setup data
var searchInput = {_: ["keyword"]} 
var searchInputWithUserArg = {_: searchInput._, user: 'stillesjo'};
var searchInputWithLanguageArg = {_: searchInput._, language: 'alexscript'};

describe('search', function () {
  describe('searching function', function() {
    it ('should take keywords', function() {
      search({get: function(searchString) {
        expect(searchString.url).to.contain(searchInput._[0]);
        expect(searchString.url).to.not.contain(searchInputWithUserArg.user);
        expect(searchString.url).to.not.contain(searchInputWithLanguageArg.language);
      }}, searchInput, null);
    });
    it ('should take --user flag', function() {
      search({get: function(searchString) {
        expect(searchString.url).to.contain(searchInput._[0]);
        expect(searchString.url).to.contain(searchInputWithUserArg.user);
        expect(searchString.url).to.not.contain(searchInputWithLanguageArg.language);
      }}, searchInputWithUserArg, null);
    });
    it ('should take --language flag', function () {
      search({get: function(searchString) {
        expect(searchString.url).to.contain(searchInput._[0]);
        expect(searchString.url).to.not.contain(searchInputWithUserArg.user);
        expect(searchString.url).to.contain(searchInputWithLanguageArg.language);
      }}, searchInputWithLanguageArg, null);
    });
  })
})
