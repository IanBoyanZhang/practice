var TreeNode = require('./include/TreeNode').TreeNode;
/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 */

// Divide and conqure send a range of min and max
// min < left.val < node.val < right.val < max
// Correct solution 1 

/**
 * Method 1
 * Using stack to re-trieve all nodes
 */
var isValidBST = function(root) {
  var stack = [];

  var inOrder = function(node) {
    if (node === null) return null;
    if (node.left) inOrder(node.left);
    stack.push(node.val);
    if (node.right) inOrder(node.right);
  };
  
  inOrder(root);
  var isValid = true;
  var prev = Number.NEGATIVE_INFINITY;
  stack.forEach(function(elem) {
    if (elem <= prev) isValid = false;
    prev = elem;
  });
  return isValid;
};

// Slightly improved version
// As in 11/21/2016, below solution fails [0, -1] test case on leetcode
var isValidBST = function(root) {
  var prevVal = Number.NEGATIVE_INFINITY;
  var isValid = true;
  var inOrder = function(node) {
    if (node === null) return null;
    if (node.left) inOrder(node.left);
    if (node.val <= prevVal) {
      isValid = false;
      return;
    }
    prevVal = node.val;
    if (node.right) inOrder(node.right);
  };
  inOrder(root);
  return isValid;
};

var root = new TreeNode(0);
root.left = new TreeNode(-1);
var rtn = isValidBST(root);
console.log(rtn);
/**
 * Method 2 Divide and conquer
 *
 */
// Traverse binary search tree in order
var isValidBST = function(root) {
  var dfs = function(node) {
  };
  dfs(root);
};
