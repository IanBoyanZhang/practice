// n steps
// 1 step, 2 step, 3 step // How many combinations?

// TODO: optimization passing the sum value with numCom
var childRunning = function(n) {
  // How many steps combination it will have? 
  
  var steps = [1, 2, 3];
  var STEPS_LEN = steps.length;
  var counter = 0;

  var sum = function(array) {
    var len = array.length;
    var rtnVal = 0;
    for (var j = 0; j < len; j++) {
      rtnVal += array[j];
    }
    return rtnVal;
  };

  // @input number comb is a series of 
  var recursor = function(numCom) {
    var _returnArr = [];
    var _sumVal;
    // base case
    _sumVal = sum(numCom);
    if (_sumVal === n) {
      console.log(numCom);
      counter++;
      _returnArr.push(numCom);
      return _returnArr;
    } 
    if (_sumVal > n) {
      return _returnArr;
    }

    for (var i = 0; i < STEPS_LEN; i++) {
      numCom.push(steps[i]);
      _returnArr = _returnArr.concat(recursor(numCom));
      numCom.pop(steps[i]);
    }
    return _returnArr;
  };
  
  console.log(recursor([]));
  return counter;
};
console.log(childRunning(4));
