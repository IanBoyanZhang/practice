/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST
 * Assumption: no dup
 * @param {number []} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * Edge cases: nums []
 *
 */
var sortedArrayToBST = function(nums, start, end) {
  'use strict';
  if (start === undefined) {
    return sortedArrayToBST(nums, 0, nums.length-1);
  }
  if (start > end) return null;
  // Avoid overflow
  var mid = Math.floor(start + (end - start)/2);
  var node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums, start, mid-1);
  node.right = sortedArrayToBST(nums, mid+1, end);
  return node;
};

var A = [1, 2, 3, 4, 5];
var rtn = sortedArrayToBST(A);
console.log(rtn);
rtn = sortedArrayToBST([]);
console.log(rtn);
rtn = sortedArrayToBST([0]);
console.log(rtn);

// Internal recursion
var sortedArrayToBST = function(nums) {

  var dfs = function(start, end) {
    if (start > end) { return null; }
    // var mid = (start + end) >> 1;
    var mid = Math.floor(start + (end - start)/2);
    var node = new TreeNode(nums[mid]);
    node.left = dfs(start, mid - 1);
    node.right = dfs(mid + 1, end);
    return node;
  };

  return dfs(0, nums.length - 1);
};

var A = [1, 2, 3, 4, 5];
var rtn = sortedArrayToBST(A);
console.log(rtn);
/*rtn = sortedArrayToBST([]);
console.log(rtn);
rtn = sortedArrayToBST([0]);
console.log(rtn); */

var A = [1, 3];
var rtn = sortedArrayToBST(A);
console.log(rtn);
