/**
 ** @param {number} k
 ** @param {number} n
 ** @return {number[][]}
 **/
var combinationSum3 = function(k, n) {
  // Seperation works for both even and odd #
  var n1 = Math.round((n+1)/2) - 1; 
  // var n2 = Math.round(n/2);
  var n2 = n - n1;

  // Naive approach
  var k1 = 0;
  var k2 = 0;
  var arr = [];
  var group = [];
  // for (var i = 1, j = n; i <= n1 && j >= n2; i+=1, j-=1) {
  for (var i = 1, j = n; i <= n1 && i + j <= k; i+=1, j-=1) {
    for (; k1 < k; kiter+=1) {
      k2 = k - k1;
    }
    group = [];
  }
  return arr;
};

