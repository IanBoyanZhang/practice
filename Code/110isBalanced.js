/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var ans = true;
    var dfs = function(node) {
        if(!node) return;

        var left = dfs(node.left) || 0;
        var right = dfs(node.right) || 0;

        if (Math.abs(left - right) > 1) { ans = false; return; }
        return Math.max(left, right) + 1;
    };
    dfs(root);
    return ans;
};
