/**
 * @param {number[][]} nums
 * @return {number[][]}
 */
// Two pointers
var threeSum = function(nums) {
  var NUMS = nums.sort(function(a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });

  // go through unique
  var res = [];
  for (var i = 0, n = NUMS.length; i < n - 2; i+=1) {
    var a = NUMS[i];
    if (a === NUMS[i - 1]) {
      continue;
    }
    var start = i + 1;
    var end = n - 1;
    while(start < end) {
      var b = NUMS[start];
      var c = NUMS[end];
      if (a + b + c === 0) {
        res.push([a, b, c]);
        // Skip duplicated
        while( start < end && NUMS[start] === NUMS[start + 1]) {
          start += 1;
        }
        while( start < end && NUMS[start] === NUMS[end - 1]) {
          end -= 1;
        }
        start += 1;
        end -= 1;
      } else if (a + b + c > 0) {
        end = end - 1;
      } else {
        start = start + 1;
      }
    }
  }
  return res;
};

var arr = [0, 1, 3, -1, -5, -7, 8, 4, 5];
var arr = [-1,0,1,2,-1,-4];
var arr = [0, 0, 0, 0];
var rtn = threeSum(arr);
console.log(rtn);
