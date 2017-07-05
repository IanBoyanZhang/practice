#include <vector>

using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
  public:
    vector< vector<int> > levelOrder(TreeNode* root) {
      vector< vector<int> > res;
      dfs(res, root, 1);
      return res;
    }

    void dfs(vector< vector<int> > &res, TreeNode* r, int level) {
      if (!r)  return;

      if (level > res.size()) res.push_back(vector<int>());

      res[level - 1].push_back(r->val);
      dfs(res, r->left, level + 1);
      dfs(res, r->right, level + 1);
    }

};
