'use strict';

module.exports = {
  TRAVIS_API_URI: 'https://api.travis-ci.org',
  API_URI: 'https://api.github.com',
  SEARCH_URI: '/search/repositories',
  GITHUB_GIT_URI: 'git@github.com:',
  GITHUB_HTTPS_URI: 'https://github.com/',
  loggingConfigs: {
    outputMode: 'short',
  },
  logPrefix: 'buh.',
  logfile: 'buh.log',
  consoleLogLevel: ((process.env.NODE_ENV === 'test' ||
                    process.env.NODE_ENV === 'debug') ? 'debug' : 'fatal'),
  logToFile: process.env.NODE_ENV === 'debug',
};
