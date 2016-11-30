/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// This is a really solution implementation
var permuteUnique = function(nums) {
  var len = nums.length, r = [], hash = {}, res = [];
  var dfs = function(nums, l, hash) {
    if (l === len) {
      // slice?
      return r.push(res.map(function(item) {
        return item;
      }));
    }

    // build next hash array
    var h = {};

    Object.keys(hash).forEach(function(item) {
      var h = JSON.parse(JSON.stringify(hash));
      h[item] = hash[item] - 1;
      if(h[item] === 0) delete h[item];
      res.push(Number(item));
      dfs(nums, l+1, h);
      res.pop();
    });
  };
  // build hash
  for (var i = 0; i < len; i+=1) {
    hash[nums[i]] = hash[nums[i]] || 0;
    hash[nums[i]] +=1;
  }
  dfs(nums, 0, hash);
  return r;
};
// console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 1, 2, 1]));
console.log(permuteUnique([1, 1, 2, 3]));
console.log(permuteUnique([1]));
