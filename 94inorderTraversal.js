var TreeNode = require('./include/TreeNode').TreeNode;

/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 */

var inorderTraversal = function(root) {
  var stack = [];
  var dfs = function(node) {
    if (!node) return;
    dfs(node.left);
    stack.push(node.val);
    dfs(node.right);
  };

  dfs(root);
  return stack;
};
