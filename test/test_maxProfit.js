var assert = require('chai').assert;
var maxProfit = require('../maxProfit')


describe("Check profit", function(){
  it('should return 16 when given the array [45, 24, 35, 31, 40, 38, 11]', function(){
    assert.equal(maxProfit([45, 24, 35, 31, 40, 38, 11]), 16);
  });

  it('should return 3 when given the array [34, 32, 35, 4]', function(){
    assert.equal(maxProfit([34, 32, 35, 4]), 3);
  });
});