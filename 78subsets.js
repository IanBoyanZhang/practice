/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 */
// duplication?
var subsets = function(nums) {
  var res = [];
  res.push([]);
  var i = 0, j = 0, k = 0;
  for (; i < nums.length; i+=1) {
    var r_size = res.length;
    for (j = 0; j < r_size; j+=1) {
      var rj_size = res[j].length;
      var newRes = res[j].slice();
      newRes.splice(j, 0, nums[i]);
      res.push(newRes);
    }
  }
  return res;
};

var rtn = subsets([1, 2, 3]);
var rtn = subsets([1]);
console.log(rtn);
