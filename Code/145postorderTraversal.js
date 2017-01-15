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
    dfs(node.right);
    stack.push(node.val);
  };

  dfs(root);
  return stack;
};
