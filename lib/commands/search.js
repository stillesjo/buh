'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var api = require('../api');

function queryStringFromArgs(args) {
  var searchString = '?q=' + args._.join('+');
  if (args.user) {
    searchString = searchString.concat('+user:' + args.user);
  }
  if (args.language) {
    searchString = searchString.concat('+language:' + args.language);
  }
  return searchString;
}

function performQuery(request, args, logger) {
  api.search(request, queryStringFromArgs(args), function(error, result) {
    if (error) {
      console.log('Something unexpected has happended..');
      return;
    }
    /* jshint camelcase: false */
    var res = result.total_count || 0;
    logger('Showing %d out of %d repositories ' +
                'that match your search query',
    Math.min(res, 30), res);
    _.forEach(result.items, function(repo) {
      logger(repo.full_name);
    });
    /* jshint camelcase: true */
  });
}

function help(logger) {
  logger(fs.readFileSync(
    path.resolve(__dirname, '../templates/help-search.txt'), 'utf8'));
}

module.exports = function(logger, request, args) {
  if (args.help) {
    help(logger);
  }  else {
    performQuery(request, args, logger);
  }
};
