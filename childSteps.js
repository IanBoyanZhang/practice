// n steps
// 1 step, 2 step, 3 step // How many combinations?

// TODO: optimization passing the sum value with numCom
var childRunning = function(n) {
  // How many steps combination it will have? 
  
  var steps = [1, 2, 3];
  var combination = [];
  var STEPS_LEN = steps.length;

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
    var _sumVal;
    // base case
    _sumVal = sum(numCom);
    if (_sumVal === n) {
      combination.push(numCom);
      return;
    } 
    if (_sumVal > n) {
      return;
    }

    for (var i = 0; i < STEPS_LEN; i++) {
      numCom.push(steps[i]);
      recursor(numCom);
      numCom.pop(steps[i]);
    }
  };
  
  recursor([]);
  return combination;
};

console.log(childRunning(3));
