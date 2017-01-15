/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *       this.val =  val;
 *       this.left = this.right = null;
 * }
 */
 /**
  *  @param {TreeNode} root
  *  @return {string[]}
  */
 var binaryTreePaths = function(root) {
    var bucket = [];
    if (root === null) return bucket;
    var recurse = function(node, str) {
      if (node.left === null && node.right === null) {
        return bucket.push(str);
      }
      if (node.left !== null) recurse(node.left, str + "->" + node.left.val);
      if (node.right !== null) recurse(node.right, str + "->" + node.right.val);
    };
    recurse(root, "" + root.val);
    return bucket;
};
