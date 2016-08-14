/**
 * @param {number} n
 * @return {number}
 * Given a non-negative integer n, 
 * count all numbers with unique digits x, where 0 <= x < 10^n
 * question: definition of unique numbers
 * Combination problem
 * 211
 * 311
 * 411
 * 1211
 * super large number?
 */

var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) { return 1; }
  if (n === 1) { return 10; }
  var UNIT = 9;
  var prod = function(m) {
    var res = 1;
    for (var iter = 0; iter < m; iter += 1) {
      res *= UNIT - iter;
    }
    return res;
  };

  var count = 0;
  for (var i = 1; i < n; i += 1) {
    count += prod(i);
  }

  // n(1)
  return count * UNIT + 10;
};

console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));
console.log(countNumbersWithUniqueDigits(5));
console.log(countNumbersWithUniqueDigits(11));
