/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead
 *
 */
// color red, white, blue, sort them so that objects of the same color are adjacent, with the colors 
// in the order red, white, blue
// 0. 1. 2
var sortColors = function(nums) {
  var len = nums.length;
  var head = 0, tail = len - 1, i = 0;

  function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  while(i <= tail) {
    if(nums[i] === 0) {
      swap(nums, head, i);
      head += 1;
      i+=1;
      continue;
    }
    if (nums[i] === 2) {
      swap(nums, tail, i);
      tail -=1;
      // Thinking about why
      // i+=1;
      continue;
    }
    i += 1;
  }
};
