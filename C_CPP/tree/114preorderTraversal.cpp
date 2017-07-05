#include <vector>
#include <stack>

using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x): val(x), left(NULL), right(NULL) {}
};

class Solution {
  public:
    vector<int> preorderTraversal(TreeNode* root) {
      stack<TreeNode*> stack; 
      vector<int> result;

      if (root) stack.push(root);

      while(!stack.empty()) {
        TreeNode* node = stack.top();
        stack.pop();
        result.push_back(node->val);
        if(node->right) stack.push(node->right);
        if(node->left) stack.push(node->left);
      }
      return result;
    }
};

