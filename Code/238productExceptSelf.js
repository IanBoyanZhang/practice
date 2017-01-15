/**
 * @param {number []} nums
 * @return {number []}
 */

// Solve it without division and in O(n)
var productExceptSelf = function(nums) {
  var len = nums.length;
  var l_prod = 1, r_prod = 1;
  var left = [], right = [];

  for (var i = 1; i < len; i+=1) {
    l_prod *= nums[i - 1];
    left[i] = l_prod;
    r_prod *= nums[len - i];
    right[len - 1 - i] = r_prod;
  }

  var output = [];
  output[0] = right[0];
  for(i = 1; i < len - 1; i+=1) {
    output[i] = left[i] * right[i];
  }
  output[len - 1] = left[len - 1];
  return output;
};

var productExceptSelf = function(nums) {
  var len = nums.length;
  var l_prod = 1, r_prod = 1;
  var left = [], right = [];
  var i;
  for (i = 1; i < len; i+=1) {
    l_prod *= nums[i - 1];
    left[i] = l_prod;
  }

  for (i = len - 1 - 1; i >= 0; i-=1) {
    r_prod *= nums[i + 1];
    right[i] = r_prod;
  }

  var output = [];
  output[0] = right[0];
  for (i = 1; i < len - 1; i+=1) {
    output[i] = left[i] * right[i];
  }
  output[len - 1] = left[len - 1];
  return output;
};

// Follow up solve it with constant space
// Without extra space
var productExceptSelf = function(nums) {
  var len = nums.length;
  var l_prod = 1, r_prod = 1;

  var output = [], i;
  output[0] = 1;
  for (i = 1; i < len; i+=1) {
    l_prod *= nums[i - 1];
    output[i] = l_prod;
  }
  for (i = len - 1 - 1; i >= 0; i-=1) {
    r_prod *= nums[i + 1];
    output[i] *= r_prod;
  }
  return output;
};
