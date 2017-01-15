/**
 * @param {number} x
 * @return {number}
 *
 */
// No negative value no complex
// eps = 0.01 works for x = 9
var mySqrt = function(x) {
  var eps = 0.01;
  if (x < 1) return 0;
  if (x === 1) return 1;
  var u = x;
  var l = 0;
  var p = (u + l)/2;
  while(Math.abs(x - p*p) > eps) {
    (x - p*p) > 0 ? l = p : u = p;
    p = (u + l)/2;
  }
  return Math.floor(p);
};

// Another implementation
// comparing to previous implementation eps = 0.001 works for x = 9 
var mySqrt = function(x) {
  var eps = 0.001;
  if (x < 1) return 0;
  if (x === 1) return 1;
  var u = x;
  var p = x/2;
  var diff = x - p*p;
  while(Math.abs(diff) > eps) {
    if (diff > 0) {
      p = (u + p)/2;
    } else {
      u = p;
      p /= 2;
    }
    diff = x - p*p;
  }
  return Math.floor(p);
};
