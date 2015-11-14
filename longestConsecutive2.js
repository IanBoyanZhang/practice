/**
 *
 * @param {number[]} nums
 * @return {number}
 */

// Using iterative approach instead
var longestConsecutive = function(nums) {
  var hashmap = {};

  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  // duplicated numbers? 
  // first pass
  for (var iter = 0, len = nums.length; iter < len; iter++) {
    hashmap[nums[iter]] = nums[iter] + 1;
  }

  var traverseList = function(key, obj) {
    var counter = 1, queue = []; queue.push(obj[key]);
    var newKey;
    while (queue.length) {
      newKey = queue.shift();
      if(obj.hasOwnProperty(obj[newKey])) { queue.push(obj[newKey]); counter+=1; }
    }
    return counter;
  };
  // Second pass
  // declare necessary vars to record 
  var currLen, maxLen = 1, maxKey;
  for (var key in hashmap) {
    if (maxKey === undefined) maxKey = key;
    currLen = traverseList(key, hashmap, 0);
    if (currLen > maxLen) { maxLen = currLen; maxKey = key; }
  }
  return maxLen;
};

console.log(longestConsecutive([100, 8, 4, 200, 3, 1, 2]));

