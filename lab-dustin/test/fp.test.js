const assert = require('assert');
const { expect } = require('chai');
const sut = require('../lib/fp.js');

describe('Module', function(){
  describe('#mapFunction', function(){
    it('should return new array', function(done){
      sut.mapFunction([1,2,3], function(array){
        expect(array).to.be.an('array');
        done();
      });
    });
  });
});
