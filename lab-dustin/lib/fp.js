exports.mapFunction = function(array, callback){
  var newArray = Array.prototype.map.call(array, item => item * 2);
  callback(newArray);
  console.log(newArray);
};

exports.reduceFunction = function(array, callback){
  var reduceVal = Array.prototype.reduce.call(array, (acc,item) => acc += item);
  console.log(reduceVal);
  callback(reduceVal);
};
