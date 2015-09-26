#!/usr/bin/env node

'use strict';
var api = require('../lib/api/')(require('request'),
                                 require('child_process').exec);

require('../')(console.log, api);
