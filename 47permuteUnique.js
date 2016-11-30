/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var cpObj = function(Obj) {
  var out = {};
  Object.keys(Obj).forEach(function(item) {
    if (Obj.hasOwnProperty(item))
      out[item] = Obj[item];
  });
  return out;
};

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
      h = cpObj(hash);
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
/*console.log(permuteUnique([1, 1, 2, 1]));
console.log(permuteUnique([1, 1, 2, 3]));
console.log(permuteUnique([1]));*/

// Slightly faster
var permuteUnique = function(nums) {
  var len = nums.length, r = [], hash = {}, res = [], h = [], hi = [];
  var dfs = function(nums, l) {
    if (l === len) {
      // slice?
      return r.push(res.map(function(item) {
        return item;
      }));
    }

    // For each level only recurse unique number as tree node
    for (var i = 0; i < h.length; i+=1) {
      if (hi[i] === true) continue;
      hash[h[i]] -= 1;
      // if no repeated do not use h[i] in next level
      if (!hash[h[i]]) hi[i] = true;
      res.push(Number(h[i]));
      dfs(nums, l+1);
      hash[h[i]] += 1;
      hi[i] = false;
      res.pop();
    }
  };
  // build hash
  // counting how many instances for each unique number
  for (var i = 0; i < len; i+=1) {
    hash[nums[i]] = hash[nums[i]] || 0;
    hash[nums[i]] +=1;
  }
  // unique numbers for each tree dfs recursion
  h = Object.keys(hash);
  dfs(nums, 0);
  return r;
};

console.log(permuteUnique([1, 1, 2, 1]));
console.log(permuteUnique([1, 2, 3]));
// console.log(permuteUnique([1]));
