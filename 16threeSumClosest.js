/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Closest to the target
// Duplication shiould not be a concern for correctness
// Two pointers
var threeSumClosest = function(nums, target) {
  var S = nums.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  var min = Number.POSITIVE_INFINITY;
  var L = S.length;
  var rtnVal = 0;
  for (var i = 0; i < L - 2; i += 1) {
    if (S[i] === S[i - 1]) continue;
    var a = S[i];
    var m = i + 1;
    var n = L - 1;
    while(m < n) {
      var b = S[m];
      var c = S[n];
      var res = a + b + c;
      if (res - target === 0) { return target; }
      if (Math.abs(res - target) < min) {
        min = Math.abs(res - target);
        rtnVal = res;
      }
      if (res - target > 0) {
        n -= 1;
      } else {
        m += 1;
      }
    }
  }
  return rtnVal;
};

// var arr = [-1, 2, 1, -4];
var arr = [0, 2, 1, -3];
var tgt = 1;
var rtn = threeSumClosest(arr, 1);
console.log(rtn);
