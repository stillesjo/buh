'use strict';

var _ = require('lodash');
var help = require('../help');

function runSeachHelp(logger) {
  help(logger, 'search');
}

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

function performQuery(api, args, logger) {
  api.search(queryStringFromArgs(args), function(error, result) {
    if (error) {
      logger('Something unexpected has happended..');
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

module.exports = function(api, args, logger) {
  if (args.help) {
    runSeachHelp(logger);
  }  else {
    performQuery(api, args, logger);
  }
};
