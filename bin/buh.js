#!/usr/bin/env node

'use strict';

require('../')(function(log) {
  console.log('prefix: ' + log);
});
