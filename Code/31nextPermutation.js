/**
 * @param {number[]} nums
 * @return {void} Modify nums in place
 * No return
 */

// https://en.wikipedia.org/wiki/Permutation
// Wikipedia permutatino algorithm
// https://discuss.leetcode.com/topic/15216/a-simple-algorithm-from-wikipedia-with-c-implementation-can-be-used-in-permutations-and-permutations-ii
// Generation in lexicographic order
var nextPermutation = function(nums) {
  var swap = function(arr, m, n) {
    var temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
  };
  var reverse = function(arr, start, end) {
    if (start >= end) { return; }
    swap(arr, start, end);
    reverse(arr, start+1, end-1);
  };

  var i, L = nums.length;
  var k = -1;
  // step 1
  // Finding decreasing sequence
  for (i = L - 1 - 1; i>=0; i-=1){
    if (nums[i] < nums[i+1]) {
      k = i;
      break;
    }
  }
  // last
  // All in increasing order
  // So reverse the sequence
  if (k < 0) {
    // range generate first
    return reverse(nums, 0, L-1);
  }
  // step 2
  for (i = L - 1; i >= k; i-=1) {
    if(nums[i] > nums[k]) {
      break;
    }
  }
  // step 3
  swap(nums, i, k);
  // step 4
  reverse(nums, k+1, L-1);
};

var a = [1, 2, 3, 4, 5];
var a = [1, 3, 2, 5, 4];
var a = [5, 4, 3, 2, 1];
var a = [1];
var a = [2, 1];
var a = [];
nextPermutation(a);
console.log(a);
