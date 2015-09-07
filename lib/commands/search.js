'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');

function arrayToQueryString(args) {
  var searchString = '?q=' + args._.join('+');
  if (args.user !== 'undefined') {
    searchString = searchString.concat('+user:' + args.user);
  }
  if (args.language !== 'undefined') {
    searchString = searchString.concat('+language:' + args.language);
  }
  return searchString;
}

function performQuery(config, request, args) {
  var url = config.API_URI + config.SEARCH_URI + arrayToQueryString(args);
  request.get(
    {
      url: url,
      headers: {
        'User-Agent': 'request',
      },
    }, function(error, response, body) {
      var result = JSON.parse(body);
      /* jshint camelcase: false */
      console.log('Found %s repositories that match your search query',
                  result.total_count || 0);
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
