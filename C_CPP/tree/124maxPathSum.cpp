/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int dfs(TreeNode* node, int& maxSum) {
        if (!node) {return 0;}
        // Compute the maximum path sum on the left and right subtrees
        int leftMax = std::max(0, dfs(node->left, maxSum));
        int rightMax = std::max(0, dfs(node->right, maxSum));

        // Update the maximum path sum including the current node
        maxSum = std::max(maxSum, leftMax + rightMax + node->val);

        // Return the maximum path sum extending to the parent
        return std::max(leftMax, rightMax) + node->val;
    }
    int maxPathSum(TreeNode* root) {
        int result = INT_MIN;
        dfs(root, result);
        return result;
    }
};
