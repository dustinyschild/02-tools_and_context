const assert = require('assert');
const { expect } = require('chai');
const sut = require('../lib/fp.js');

describe('Module', function(){
  describe('#mapFunction()', function(){
    it('should return new array', function(done){
      sut.mapFunction([1,2,3], function(array){
        expect(array).to.be.an('array');
        var expectedArray = [2,4,6];
        array.forEach(function(item,i){
          assert.equal(array[i], expectedArray[i]);
        });
        done();
      });
    });
  });
  describe('#reduceFunction()',function(){
    it('shoud return a single numerical value', function(done){
      sut.reduceFunction([1,2,3], function(reduceVal){
        expect(reduceVal).to.be.a('number');
        done();
      });
    });
  });
});
