#!/usr/bin/env node

'use strict';

var api = require('../lib/api/')(require('request'));

require('../')(function(log) {
  console.log('prefix: ' + log);
}, api);
