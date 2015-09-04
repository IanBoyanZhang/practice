/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var objIdx = {};
  var result = [];

  for ( var i = 0, len = nums.length; i < len; i++ ) {
    objIdx[nums[i]] = objIdx[nums[i]] || { idx: [], c: (target - nums[i])};
    objIdx[nums[i]].idx.push(i+1);
  }

  for ( var j = 0; j < len; j++) {  
    var numKey = nums[j];
    if (objIdx[numKey].c === numKey) {
      if (objIdx[numKey].idx.length === 2) {
        return objIdx[numKey].idx;
      } 
      continue;
    }

    var candidateVal = objIdx[numKey].c;
    if (objIdx[candidateVal] && objIdx[candidateVal].c === numKey) {
      var idx1 = objIdx[candidateVal].idx[0];
      var idx2 = objIdx[numKey].idx[0];
      return idx1 > idx2 ? [idx2, idx1] : [idx1, idx2]
    }
  }
  return [];
};

// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([3,2,4], 6));
// console.log(twoSum([0, 4, 3, 1], 7));
// var target = 16021;