/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var sum = 0;
  for (var i = 0, len = nums.length; i < len; i++) {
    sum += i;
    sum -= nums[i];
  }
  return sum + len;
};

// Slower
// https://github.com/chihungyu1116/leetcode-javascript/blob/master/268%20Missing%20Number.js
var MissingNumber = function(nums) {
  var res = 0;

  // index and num will cancel out by using xor
  for (var i = 1; i < nums.length; i+=1) {
    res = res ^ i ^ nums[i - 1];
  }
  return res;
};
