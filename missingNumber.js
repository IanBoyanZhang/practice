/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var sum = 0;
  for (var i = 0, len = nums.length; i < len; i++) {
    sum += i;
    sum -= nums[i]
  }
  return sum + len;
};