/**
 * Nested array?
 * TODO: sequence
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  var len = nums.length;
  if (len <= 1) { return [nums]; }

  var recurse = function(n, arr) {
    if (n === 2) {
      return [[arr[0], arr[1]], [arr[1], arr[0]]];
    }
    var rtn = [];
    var res = recurse(n - 1, arr);
    var cp;
    for (var i = 0; i < res.length; i+=1) {
      // n === item.length
      for (var j = 0; j < n; j+=1) {
        // splice
        cp = res[i].slice();
        cp.splice(j, 0, arr[n - 1]);
        rtn.push(cp);
      }
    }
    return rtn;
  };

  return recurse(len, nums);
};

/*console.log(permute([1, 2]));
console.log(permute([1, 2, 3]));*/

// 11/29 second pass
var permute = function(nums) {
  var ans = [], res = [], hash = [], len = nums.length;
  var dfs = function(num, nums) {
    if (num === len) {
      return ans.push(res.map(function(item) {
        return item;
      }));
    }
    for (var i = 0; i<len; i+=1) {
      if (hash[i]) continue;
      hash[i] = true;
      res.push(nums[i]);
      dfs(num + 1, nums);
      hash[i] = false;
      res.pop();
    }
  };

  dfs(0, nums);
  return ans;
};
