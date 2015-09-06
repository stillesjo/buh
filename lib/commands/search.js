'use strict';

var _ = require('lodash');

function arrayToQueryString(args) {
  var queryString = '?q=';
  _.forEach(args, function(keyword) {
    queryString = queryString + keyword + ',';
  });
  return queryString.substring(0, queryString.length - 1);
}

module.exports = function(config, request, args) {
  var url = config.API_URI + config.SEARCH_URI + arrayToQueryString(args);
  request
    .get({
      url: url,
      headers: {
        'User-Agent': 'request',
      },
    }, function(error, response, body) {
      var result = JSON.parse(body);
      _.forEach(result.items, function(repo) {
        /* jshint camelcase: false */
        console.log(repo.full_name);
        /* jshint camelcase: true */
      });
    });
};
