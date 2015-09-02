'use strict';

var lab = exports.lab = require('lab').script();
var code = require('code');

var child = require('child_process');


lab.experiment('test', function() {
  lab.test('does something cool', function(done) {
    child.exec('ls', function(err, stdout) {
      code.expect(stdout).to.not.be.undefined();
      done();
    });
  });
});
