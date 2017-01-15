var threeSumSmaller = function(nums, target) {
  var NUMS = nums.sort(function(a, b) { return a > b ? 1 : -1; });
  var L = NUMS.length;
  var rtn = 0;
  for(var i = 0; i < L - 2; i+=1) {
// WIthout requirement for duplicated elements
//    if (NUMS[i] === NUMS[i - 1]) continue;
    var m = i + 1;
    var n = L - 1;
    while(m < n) {
      var a = NUMS[i];
      var b = NUMS[m];
      var c = NUMS[n];
      var res = a + b + c;
      if (res >= target) {
        n -= 1;
        continue;
      }
      while (res < target && m < n)  {
        rtn += 1;
        n -= 1;
      }
      m += 1;
      n = L - 1;
    }
  }
  return rtn;
};

// var nums = [-2, 0, 1, 3];
// var nums = [3, 1, 0, -2];
var nums = [-1, 1, -1, -1];
var nums = [3,2,-2,6,2,-2,6,-2,-4,2,3,0,4,4,1];
var rtn = threeSumSmaller(nums, 3);
console.log(rtn);
