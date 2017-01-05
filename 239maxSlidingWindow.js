/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// https://segmentfault.com/a/1190000003903509
// https://github.com/chihungyu1116/leetcode-javascript/blob/master/239%20Sliding%20Window%20Maximum.js
var maxSlidingWindow = function(nums, k) {
  var result = [];
  var linkedListWithTwoEndsOps = [];
  var len = nums.length;
  var i;

  if (k > len || k === 0) {
    return result;
  }

  for (i = 0; i < len; i+=1) {
    // Remove anything that is less than the current value
    // So linkedListWithTwoEndsOps maintains values greater than the current value
    while (linkedListWithTwoEndsOps.length && nums[linkedListWithTwoEndsOps[linkedListWithTwoEndsOps.length - 1]] < nums[i]) {
      linkedListWithTwoEndsOps.pop();
    }
    // In case that all elements in the linkedListWithTwoEndsOps are all greater than the current one (descending order)
    // Shift out the 
    // If the first one (largest one) is the leftmost of the window then shift out head
    if (linkedListWithTwoEndsOps[0] < i - k + 1) {
      linkedListWithTwoEndsOps.shift();
    }
    linkedListWithTwoEndsOps.push(i);

    // For each sliding window movement, we record the highest value in that sliding window
    // i >= k - 1 to ensure that we don't prematurely record values before we get to the full range of the first sliding window
    if (i >= k - 1) {
      result.push(nums[linkedListWithTwoEndsOps[0]]);
    }
  }

  return result;
};
