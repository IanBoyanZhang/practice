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

// http://blog.csdn.net/happyaaaaaaaaaaa/article/details/51534048
// console.log(permute([1, 1, 2]));
// dfs with swap
// without requirement to maintain temporary backtracking array
// It seems without using global result container. The code runs faster
var permute = function(nums){
  var swap = function(nums, m, n) {
    var temp = nums[m];
    nums[m] = nums[n];
    nums[n] = temp;
  };

  var dfs = function(res, nums, j) {
    // base
    if (j === nums.length) {
      res.push(nums.slice());
      return res;
    }

    for (var i = j; i < nums.length; i +=1 ) {
      swap(nums, i, j);
      dfs(res, nums, j+1);
      swap(nums, j, i);
    }
    return res;
  };
  return dfs([], nums, 0);
};
// console.log(permute([1, 2 ,3]));

// Non-recursive implementation
// slice O(N)
// splice (N - id)?
var permute = function(nums) {
  var res = [], first = [];
  first.push(nums[0]);
  res.push(first);
  var newRes;
  for (var i = 1; i < nums.length; i+=1) {
    newRes = [];
    for (var j = 0; j < res.length; j+=1) {
      var size = res[j].length + 1;
      for (var k = 0; k < size; k+=1) {
        var itm =  res[j].slice();
        itm.splice(k, 0, nums[i]);
        newRes.push(itm);
      }
    }
    res = newRes.slice();
  }
  return res;
};
console.log(permute([1, 2 ,3]));
