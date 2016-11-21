var chai = require('../../node_modules/chai/chai');
var expect = chai.expect;

var random = require('../../src/Example/randomNumber');

describe("get random number", function () {
  it("it should return a random number", function () {
    var number = 42;
    expect(number).to.equal(42);
  });
});
