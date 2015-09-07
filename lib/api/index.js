'use strict';
var config = require('../config');

var headers = {
  'User-Agent': 'request',
};

module.exports = {
  search: function(request, queryString, cb) {
    var url = config.API_URI + config.SEARCH_URI + queryString;
    request.get({
      url: url,
      headers: headers,
    }, function(error, response, body) {
      cb(error, JSON.parse(body));
    });
  },
};
