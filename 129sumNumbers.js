/**
 * @param {TreeNode} root
 * @return {number}
 */

// When it is leaf push result!!
// Attention: Edge case, single node. Root is leaf at same time.
var sumNumbers = function(root) {
  if (!root) return 0;
  var sum = 0;
  var inorder = function(node, parentAccu) {
    // base case
    if (!node) return null;

    if (node.left === null && node.right === null) {
      sum += Number('' + parentAccu + node.val);
      return;
    }

    inorder(node.left, '' + parentAccu + node.val);
    inorder(node.right, '' + parentAccu + node.val);
  };

  inorder(root, '');
  return sum;
};

// Todo: remove root return 0
var sumNumbers = function(root) {
  var walk = function(node, parentAccu, sum) {
    if (!node) return 0;

    if (node.left === null && node.right === null)
      return Number('' + parentAccu + node.val) + sum;

    var accu = sum;
    accu += walk(node.left, '' + parentAccu + node.val, sum);
    accu += walk(node.right, '' + parentAccu + node.val, sum);
    return accu;
  };
  return walk(root, '',  0);
};

// Another trick use *10
// Numerically should be faster?
var sumNumbers = function(root) {
  var walk = function(node, parentSum, sum) {
    if (!node) return 0;
    if (node.left === null && node.right === null) 
      return parentSum*10 + node.val + sum;
    var accu = sum;
    accu += walk(node.left, parentSum*10 + node.val, sum);
    accu += walk(node.right, parentSum*10 + node.val, sum);
    return accu;
  };
  return walk(root, 0, 0);
};
