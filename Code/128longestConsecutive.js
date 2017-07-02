/**
 *
 * @param {number[]} nums
 * @return {number}
 */

// Using iterative approach instead
var longestConsecutive = function(nums) {
  'use strict';
  var hashmap = {};
  var hashdup = {}; // Remove duplicates

  if (nums.length <= 1) return nums.length;

  // One pass
  var maxLen = 1; var prevKey;
  for (var iter = 0, len = nums.length; iter < len; iter++) {
    if (hashdup[nums[iter]]) continue;

    if (hashmap[nums[iter]] === undefined) { hashmap[nums[iter]] = 1; hashdup[nums[iter]] = true; }
    if (hashmap[nums[iter]+1] !== undefined) { hashmap[nums[iter]] += hashmap[nums[iter]+1]; }

    // This is faster
    maxLen = Math.max(maxLen, hashmap[nums[iter]]);
    // Keeps iterating till updating all previous ones ()
    prevKey = nums[iter] - 1; 
    while(hashmap[prevKey]) {
      hashmap[prevKey] += hashmap[nums[iter]];
      if (hashmap[prevKey] > maxLen) { maxLen = hashmap[prevKey]; }
      prevKey -= 1;
    }
  }

  return maxLen;
};

//console.log(longestConsecutive([100, 8, 4, 200, 3, 1, 2]));
// console.log(longestConsecutive([100, 0, 8, 4, 200, 3, 1, 2]));
// console.log(longestConsecutive([100, 8, 4, 200, 3, 1, 0, 0, 2]));
// console.log(longestConsecutive([100, 8, 4, 200, 3, 1, 0, 2, 5]));
console.log(longestConsecutive([100, 8, 4, 200, 3, 1, 0, 2, 5, -1]));
//console.log(longestConsecutive([100]));
//console.log(longestConsecutive([0, 0]));

