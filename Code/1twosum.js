/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number []}
 */

var twoSum = function(nums, target) {
  var hash = {};
  for (var i = 0, l = nums.length; i < l; i += 1) {
    hash[nums[i]] = i;
  }
  for (i = 0, l = nums.length; i < l; i+=1) {
    if (hash[target - nums[i]]) {
      return [i, hash[target - nums[i]]];
    }
  }
  return [];
};

var twoSum = function(nums, target) {
  var hash = {};
  var rtnVal = [];
  nums.forEach(function(num, idx) {
    hash[num] = idx;
  });
  nums.forEach(function(num, idx) {
    if (hash[target - num]) {
      rtnVal = [i, hash[target - num]];
    }
  });
  return rtnVal;
};
