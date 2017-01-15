/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 *
 */
// http://bangbingsyb.blogspot.com/2014/11/leetcode-permutation-sequence.html
var getPermutation = function(n, k) {
  var nums = Array.apply(null, Array(n)).map(function(_, i) { return i + 1;});
  // iteration
  var factorial = [1];
  for (var i = 1; i < n; i+=1)
    factorial[i] = factorial[i-1]*i;
  var s = '';
  // when k < 1;
  var k_prime = k - 1 > 0 ?  k - 1 : 0;
  var L = n;
  for(i = L - 1; i >= 0; i-=1) {
    var den = factorial[i];
    var idx = Math.floor(k_prime/den);
    s += nums[idx];
    nums.splice(idx, 1);
    k_prime = k_prime % den;
  }
  return s;
};
console.log(getPermutation(3, 1));
console.log(getPermutation(3, 0));
console.log(getPermutation(1, 1));
