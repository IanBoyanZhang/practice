var TreeNode = require('./include/TreeNode').TreeNode;

var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.right.right.left = new TreeNode(1);

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

// TODO: detect full tree
// finding the max depth

// console.log(root);
var TreeTraversal = function(root){
  var queue = [];
  var bfs = function(node) {
    if (!node) {
      return;
    }
    if (node.left === null && node.right === null) {
      return;
    }
    if (node.left === null) queue.push(null);
    else queue.push(node.left.val);
    if (node.right === null) queue.push(null);
    else queue.push(node.right.val);
    bfs(node.left);
    bfs(node.right);
  };
  queue.push(root.val);
  bfs(root);
  return queue;
};

var rtn = TreeTraversal(root);
console.log(rtn);

var findMaxDepth = function(root) {
  var maxDepth = 0;
  var dfs = function(node, cnt) {
    if (!node) return;
    cnt += 1;
    if (cnt > maxDepth) maxDepth = cnt;
    dfs(node.left, cnt);
    dfs(node.right, cnt);
  };
  dfs(root, 0);
  return maxDepth;
};

var rtn = findMaxDepth(root);
console.log('maxDepth', rtn);
console.log(root);
