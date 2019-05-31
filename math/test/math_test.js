const mathLib = require('../math')

let assert = require('assert');


describe('Testing add()', function() {
  it('Should add 1 + 2 and equal to 3', function() {
    assert.equal(mathLib.add(1, 2), 3)
  });
  it('Should add 4 + 4 and equal to 8', function() {
    assert.equal(mathLib.add(4, 4), 8)
  });
  it('Should add 0 + 0 and equal to 0', function() {
    assert.equal(mathLib.add(0, 0), 0)
  });
})

describe('Testing subtract()', function() {
  it('Should add 4 - 2 and equal to 2', function() {
    assert.equal(mathLib.subtract(4, 2), 2)
  })
  it('Should add 0 - 0 and equal to 0', function() {
    assert.equal(mathLib.subtract(0, 0), 0)
  })
  it('Should add 1 - 4 and equal to -3', function() {
    assert.equal(mathLib.subtract(1, 4), -3)
  })
})

describe('Testing addTwo()', function() {
  it('Should add 2 to 5 and equal to 7', function() {
    assert.equal(mathLib.addTwo(5), 7)
  })
  it('Should add 2 to 0 and equal to 2', function() {
    assert.equal(mathLib.addTwo(0), 2)
  })
  it('Should add 2 to 1 and equal to 3', function() {
    assert.equal(mathLib.addTwo(1), 3)
  })
})