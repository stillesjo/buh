'use strict';
var config = require('../config');
var logger = require('../logger')('api');

var headers = {
  'User-Agent': 'request',
};

module.exports = function(request, process) {

  function search(queryString, cb) {
    var url = config.API_URI + config.SEARCH_URI + queryString;
    request.get({
      url: url,
      headers: headers,
    }, function(error, response, body) {
      cb(error, JSON.parse(body));
    });
  }

  function clone(path, to, cb) {
    logger.debug(path);
    logger.debug(to);
    process(('git clone ' + path + ' ' + (to || '')), function(err) {
      cb(err);
    });
  }

  return {
    search: search,
    clone: clone,
  };
};
