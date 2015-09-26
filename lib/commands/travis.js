'use strict';
var chalk = require('chalk');
var _ = require('lodash');

module.exports = function(api, argv, out) {

  var colorOptions = {
    passed: chalk.green,
    errored: chalk.red,
    create: chalk.white,
  };

  function parseResult(result) {
    _.forEach(result.branches, function(branch) {
      /* jshint camelcase: false */
      var commit = _.find(result.commits, {id: branch.commit_id});
      var color = colorOptions[branch.state] || chalk.white;
      out(commit.branch + ' - ' + color(branch.state));
      /* jshint camelcase: true */
    });
  }

  if (argv && argv._ && argv._.length > 0) {
    var repo = argv._.shift();
    api.getTravisBranches(repo, function(error, result) {
      if (error) {
        out(error);
      } else {
        parseResult(result);
      }
    });
  } else {
    out(chalk.red('No repository specified'));
  }
};
