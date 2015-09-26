'use strict';


var install = require('./install');

module.exports = {
  search: require('./search'),
  help: require('./help'),
  install: install,
  open: require('./open'),
  clone: install,
};
