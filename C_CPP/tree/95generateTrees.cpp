#include<vector>
using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x): val(x), left(NULL), right(NULL) {}
};

class Solution {
  public:
    vector<TreeNode*> generateTrees(int n) {
      if (n == 0) return vector<TreeNode*>();
      generate(1, n);
    }

    vector<TreeNode*> generate(int start, int end) {
      vector<TreeNode*> subTree;

      if (start > end) {
        subTree.push_back(NULL);
        return subTree;
      }

      for (int k = start; k <= end; k+=1) {
        vector<TreeNode*>leftTree = generate(start, k - 1);
        vector<TreeNode*>rightTree = generate(k + 1, end);
        for (auto i: leftTree) {
          for (auto j: rightTree) {
            TreeNode* node = new TreeNode(k);
            node->left = i;
            node->right = j;
            subTree.push_back(node);
          }
        }
      }

      return subTree;
    }
};
