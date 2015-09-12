#!/usr/bin/env node

'use strict';

var api = require('../lib/api/')(require('request'));

require('../')(console.log, api);
