/**
 * @param {number} x
 * @param {number} x
 * @return {number}
 */
// Common solution
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  var isNeg = false;
  if (n < 0) {
    isNeg = true;
    n*=-1;
  }
  var k = Math.floor(n/2);
  var l = n - k * 2;

  var t1 = myPow(x, k);
  var t2 = myPow(x, l);

  if (isNeg) {
    return 1/(t1 * t1 * t2);
  } else {
    return t1 * t1 * t2;
  }
};

// zichi han solution
// bitwise operation
// https://github.com/hanzichi/leetcode/blob/master/Algorithms/Pow(x,%20n)/README.md

var myPow = function(x, n) {
  //i positive
  var ans = 1;
  while(n) {
    (n & 1) && (ans *= x);
    x *= x;
    n >>= 1;
  }
  return ans;
};

// Considering negative
var myPow = function(x, n) {
  var isNeg = n < 0 ? (n *= -1, true) : false;

  var ans = 1; 
  while(n) {
    (n & 1) && (ans *= x);
    x *= x;
    // or /2 for overflow
    n >>>= 1;
  }
  return isNeg? 1/ans : ans;
};
