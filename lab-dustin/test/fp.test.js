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
    it('shoud return the integer 6', function(done){
      sut.reduceFunction([1,2,3], function(reduceVal){
        expect(reduceVal).to.be.a('number');
        expect(reduceVal).to.equal(6);
        done();
      });
    });
    it('shoud return the integer 13', function(done){
      sut.reduceFunction([5,2,6], function(reduceVal){
        expect(reduceVal).to.be.a('number');
        expect(reduceVal).to.equal(13);
        done();
      });
    });
  });
  describe('#filterFunction()', function(){
    it('should return an array of all passing values', function(done){
      sut.filterFunction([1,3,6,2,8,10,3], x => x > 5, function(passingValues){
        expect(passingValues).to.be.an('array');
        expect(passingValues)
          .to.include(6)
          .and.include(8)
          .and.include(10)
          .and.not.include(1)
          .and.not.include(3)
          .and.not.include(2)
          .and.not.include(3);
        done();
      });
    });
  });
  //describe('#concatFunction()');
  //describe('#spliceFunction()');
});
