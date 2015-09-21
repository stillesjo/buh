'use strict';
var expect = require('expect.js');

describe('open', function() {
  it('should exist as command in commands', function() {
    var commands = require('../lib/commands');
    expect(commands).to.have.property('open');
  });

  describe('feature', function() {
    it ('should do stuff');
  });
});
