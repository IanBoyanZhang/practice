// Works for num >=1
var sqrt2 = function(num) {
  'use strict';
  var eps = 0.1;
  var high = num/2 + 1, low = 0;
  var base = (high + low)/2;
  var square = base * base;
  while (high - low > eps) {
  // while (Math.abs(num - square) > eps) {
    base = (high + low)/2;
    square = base*base;
    if (num < square) {
      high = base;
    } else if (num > square) {
      low = base;
    } else {
      return base;
    }
  }
  return base;
};

console.log(sqrt2(1));
console.log(sqrt2(2));
console.log(sqrt2(36));
console.log(sqrt2(100));
