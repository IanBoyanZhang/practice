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
     // Travesal the tree using recursion while concat the strings
    var bucket = [];
    var recurse = function(node, str) {
      if (node === null) {
        bucket.push(str);
      }
      if (node.left !== null) recurse(node.left, str + "");
      if (node.right !== null) recurse(node.right, str + "");
    };
    recurse(root);
    return bucket;
};
