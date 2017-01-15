var TreeNode = require('./include/TreeNode').TreeNode;
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var buildTrace = function(root, trace, node) {
    if (!root) { return []; }

    if (root.val === node) { 
      trace.push(root.val);
      return trace;
    }
    
    trace.push(root.val);
    var rtn_left = buildTrace(root.left, trace, node);
    var rtn_right = buildTrace(root.right, trace, node);
    var rtn = rtn_left.concat(rtn_right);
    trace.pop();
    return rtn;
  };
  var t1 = buildTrace(root, [], p);
  var t2 = buildTrace(root, [], q);
  var index = 0;
  while(t1[index] === t2[index]) {
    index += 1;
  }
  return t1[index - 1];
};

// https://github.com/paopao2/leetcode-js/blob/master/Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree.js
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);

  // q and p on different sides
  if (left && right) {
    return root;
  }
  return left ? left: right;
};
