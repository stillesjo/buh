'use strict';
var fs = require('fs');
var _open = require('open');
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

  function open(url, browser) {
    logger.debug('Opening url: ' + url);
    _open(url, browser);
  }

  function getFileContent(path, cb) {
    if (fs.existsSync(path)) {
      cb(undefined, fs.readFileSync(path, 'utf8'));
    } else {
      cb('Unable to find ' + path);
    }
  }

  return {
    search: search,
    clone: clone,
    open: open,
    getFileContent: getFileContent,
  };
};
