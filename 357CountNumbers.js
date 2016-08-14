/**
 * @param {number} n
 * @return {number}
 * Given a non-negative integer n, 
 * count all numbers with unique digits x, where 0 <= x < 10^n
 * question: definition of unique numbers
 * Combination problem
 * Optimization hash previous result
 * Optimization reuse partial prod
 * super large number?
 */

var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) { return 1; }
  if (n === 1) { return 10; }
  var UNIT = 9;
  var hash = [];
  var prod = function(m) {
    var res = 1;
    if (hash[m]) { return hash[m]; }
    for (var iter = 0; iter < m; iter += 1) {
      res *= unit - iter;
    }
    hash[m] = res;
    return res;
  };

  var count = 0;
  for (var i = 1; i < n; i += 1) {
    count += prod(i);
  }

  // n(1)
  return count * UNIT + 10;
};

var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) { return 1; }
  if (n === 1) { return 10; }
  var UNIT = 9;
  var hash = [9];

  for(var iter = 1; iter < n && iter < 9; iter += 1) {
    hash[iter] = hash[iter - 1] * (UNIT - iter);
  }
  var prod = function(m) {
    if (m < 9) { return hash[m-1]; }
    return hash[8-1];
  };

  var count = 0;
  for (var i = 1; i < n && i < 10; i += 1) {
    count += prod(i);
  }

  // + n(1)
  return count * UNIT + 10;
};



console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));
console.log(countNumbersWithUniqueDigits(5));
console.log(countNumbersWithUniqueDigits(11));
console.log(countNumbersWithUniqueDigits(12));
console.log(countNumbersWithUniqueDigits(13));
console.log(countNumbersWithUniqueDigits(8));
console.log(countNumbersWithUniqueDigits(9));
console.log(countNumbersWithUniqueDigits(10));
