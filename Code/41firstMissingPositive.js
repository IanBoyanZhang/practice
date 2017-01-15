/**
 * @param {number[]} nums
 * @return {number}
 *
 */
// http://bangbingsyb.blogspot.com/2014/11/leetcode-first-missing-positive.html
// Using the array as a hash table
var firstMissingPositive = function(nums) {
  var i = 0;
  while(i < n) {
    if (A[i] !== i + 1 && A[i] > 0 && A[i] <= n && A[i] !== A[A[i] - 1])
      swap(A[i], A[A[i] - 1]);
    else
      i+=1;
  }
  for (i = 0; i < n; i+=1) {
    if (A[i] !== i + 1) return i + 1;
  }
  return n+1;
};
