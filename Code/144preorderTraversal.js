var TreeNode = require('./include/TreeNode').TreeNode;
/**
 * @param {TreeNode} root
 * @return {Number[]}
 */

// Top down
var preorderTraversal = function(root) {
  var stack = [];
  var dfs = function(node) {
    if (!node) return;
    stack.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return stack;
};


// Can you do it iteravitely?
