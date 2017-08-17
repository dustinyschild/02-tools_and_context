exports.mapFunction = function(array, callback){
  var newArray = Array.prototype.map.call(array, item => item * 2);
  callback(newArray);
  console.log(newArray);
};
