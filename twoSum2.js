/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Improved hash version
 */
var twoSum = function(nums, target) {
  var hashMap = {};

  for ( var i = 0, len = nums.length; i < len; i++ ) {
    var offset = target - nums[i];
    var index1 = hashMap[offset];
    if (index1 !== undefined) {
      return [index1 + 1, i + 1];
    }
    hashMap[nums[i]] = i;
  }
  return [];
};

// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([3,2,4], 6));