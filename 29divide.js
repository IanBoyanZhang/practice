/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// TLE
var divide = function(dividend, divisor) {
  var d1 = dividend;
  var d2 = divisor;
  if (!d1 || !d2) { return 0; }
  var s1 = dividend < 0;
  var s2 = divisor < 0;
  if (s1) { d1 = 0 - d1; }
  if (s2) { d2 = 0 - d2; }
  if (d1 < d2) {return 0;}
  var sub = function(dividend, divisor) {
    var cnt = 0;
    while(d1 >= d2) {
      d2 = d2 << 1;
      cnt += 1;
    }
    var res = 1 << (cnt - 1);
    if ((dividend- (divisor << (cnt - 1))) >= divisor) {
      res += sub(dividend - (divisor << (cnt - 1)), divisor);
    }
  // sign mask
    return res;
  };
  var res = sub(d1, d2);
  if (s1 !== s2) { return 0 - res; }
  return res;
};


// Seems 0/0 is not in test case
// Still Time Limited Exceeded
// https://discuss.leetcode.com/topic/15568/detailed-explained-8ms-c-solution
var divide = function(dividend, divisor) {
  var MAX_POSITIVE_INT = ~(1 << 31);
  var MAX_NEGATIVE_INT = 1 << 31;
  if (!dividend || !divisor) { return; }
//  if (!divisor || (dividend === MAX_NEGATIVE_INT && divisor === -1)) {
//    return MAX_POSITIVE_INT;
//  }
  var sign = ((dividend < 0)^(divisor < 0)) ? -1 : 1;
  var dvd = Math.abs(dividend);
  var dvs = Math.abs(divisor);
  var res = 0;
  while(dvd >= dvs) {
    var temp = dvs, mul = 1;
    while(dvd >= (temp << 1)) {
      temp <<= 1;
      mul <<= 1;
    }
    dvd -= temp;
    res += mul;
  }
  return sign === 1 ? res: -res;
};

var a = divide(-35, 5);

console.log(a);
