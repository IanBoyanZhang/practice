/**
 * @param {number []} nums
 * @param {number} k
 * @return {number[]}
 */
// O(3n)
var topKFrequent = function(nums, k) {
  var hash = [], len = nums.length;
  if (!len) return null;
  var elem;
  for (var i = 0; i < len; i+=1) {
    elem = nums[i];
    hash[elem] = ~~hash[elem];
    hash[elem] +=1;
  }

  // Rverse hash
  // Heap, automatic sorted
  var r_hash = [], idx;
  i = 0;
  for (var keys = Object.keys(hash); i < keys.length; i += 1) {
    idx = hash[keys[i]];
    r_hash[idx] = r_hash[idx] || [];
    r_hash[idx].push(~~keys[i]);
  }
  var res = [];
  for (i = len; i >= 0; i-=1) {
    if (!r_hash[i]) { continue; }
    r_hash[i].forEach(function(elem) {
      if (k) {
        res.push(elem); k-=1;
      }
    });
  }
  return res;
};
