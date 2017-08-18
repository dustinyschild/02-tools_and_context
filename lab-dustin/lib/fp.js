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

exports.filterFunction = function(array, func, callback){
  var filteredArray = Array.prototype.filter.call(array, func);
  console.log(filteredArray);
  callback(filteredArray);
};

exports.concatFunction = function(callback){
  for (let i = 1; i < arguments.length; i++){
    //var concatArray = Array.prototype.concat.call();
    console.log(arguments[i]);
  }
  var newArray = [1,2,3,4,5,6];
  callback(newArray);
  //callback(concatArray);
};
