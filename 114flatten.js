/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead
 *
 */

// Create new root then re-write it wouldn't pass
// Normal recursive approach
var flatten = function(root) {
  var arr = [];
  var dfs = function(node) {
    arr.push(node);
    node.left && dfs(node.left);
    node.right && dfs(node.right);
    node.left = node.right = null;
  };
  dfs(root);
  for (var i = 0, len = arr.length; i < len - 1; i+=1)
    arr[i].right = arr[i+1];
};

// Iteration?
// top down
// http://blog.csdn.net/happyaaaaaaaaaaa/article/details/51607005
// When left sub tree is not null, move the left sub tree to right sub tree, right sub tree becomes
// left subtree's right subtree
var flatten = function(root) {
  var p = root;
  var cache;
  while (p !== null) {
    if (p.left !== null) {
      cache = p.left;
      // find right most node of left tree
      while (cache.right !== null) cache = cache.right;
      cache.right = p.right;
      //
      p.right = p.left;
      p.left = null;
    }
    p = p.right;
  }
};
