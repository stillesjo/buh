'use strict';
var expect = require('expect.js');

var install = require('../lib/commands/install');
var helper = require('./testhelper');
var installInputHelp = {help: true};

describe('install', function() {
  describe('install help', function() {
    it('should return helptext', function() {
      install(null, installInputHelp, function(output) {
        console.log(output);
        expect(output).to.not.be(undefined);
        expect(output).to.be.a('string');
        expect(output).to.equal(helper.getInstallHelp());
      });
    });
  });
});
