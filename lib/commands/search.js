'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var api = require('../api');

function arrayToQueryString(args) {
  var searchString = '?q=' + args._.join('+');
  if (args.user) {
    searchString = searchString.concat('+user:' + args.user);
  }
  if (args.language) {
    searchString = searchString.concat('+language:' + args.language);
  }
  return searchString;
}

function performQuery(config, request, args) {
  api.search(request, arrayToQueryString(args), function(error, result) {
    if (error) {
      console.log('Something unexpected has happended..');
      return;
    }
    /* jshint camelcase: false */
    var res = result.total_count || 0;
    console.log('Showing %d out of %d repositories ' +
                'that match your search query',
    Math.min(res, 30), res);
    _.forEach(result.items, function(repo) {
      console.log(repo.full_name);
    });
    /* jshint camelcase: true */
  });
}

function help() {
  console.log(fs.readFileSync(
    path.resolve(__dirname, '../templates/help-search.txt'), 'utf8'));
}

module.exports = function(config, request, args) {
  if (args.help) {
    help();
  }  else {
    performQuery(config, request, args);
  }
};
