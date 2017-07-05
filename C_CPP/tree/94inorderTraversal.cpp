#include <vector>
#include <stack>


using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x): val(x), left(NULL), right(NULL) {}
};

// Let's do it in recursive
/*class Solution {
public:
  vector<int> inorderTraversal(TreeNode* root) {
    vector<int> stack;
    dfs(root, stack);
    return stack;
  }

  void dfs(TreeNode* r, vector<int>& res) {
    if(!r) {return;}
    dfs(r->left, res);
    res.push_back(r->val);
    dfs(r->right, res);
  }
};*/

class Solution {
  public:
    vector<int> inorderTraversal(TreeNode* root) {
      stack<const TreeNode*> s;
      vector<int> result;

      const TreeNode* p = root;
      while(!s.empty() || p != nullptr) {
        if(p != nullptr) {
          s.push(p);
          p = p->left;
        } else {
          p = s.top();
          s.pop();
          result.push_back(p->val);
          p = p->right;
        }
      }
      return result;
    }
};
