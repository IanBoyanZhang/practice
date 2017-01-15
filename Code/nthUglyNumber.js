/**
 * @param {number} n 
 * @return {number}
 */

var nthUglyNumber = function(n) {
  // cache the result
  if (n === 1) return 1;
  if (this.mem[n]) return this.mem[n];
  var f = [2, 3, 5];
  var arr = [];
  arr.push(1);
  var l1 = l2 = l3 = [];
  
  return arr;
};

nthUglyNumber.mem = {};

// Test
console.log(nthUglyNumber(10));
