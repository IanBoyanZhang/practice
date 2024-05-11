/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

// In practice, we should consider deallocation after new. 
class Codec {
public:
  string serialize(TreeNode* root) {
    string ans{""};
    _serialize(root, ans);
    return ans;
  }

  void _serialize(TreeNode* root, std::string& ans)
  {
    if (!root) { ans += "#,"; return; }

    ans += std::to_string(root->val);
    ans += ",";

    this->_serialize(root->left, ans);
    this->_serialize(root->right, ans);
  }

  // Decodes your encoded data to tree.
  TreeNode* deserialize(string data) {
    std::queue<string> tokens{};
    std::string token{};
    for (std::size_t i{0}; i < data.length(); i++) {
      if (data[i] == ',') {
        tokens.push(token);
        token = "";
      } else {
        token += data[i];
      }
    }

    return this->_deserialize(tokens);
  }

  TreeNode* _deserialize(std::queue<string>& tokens) {
    std::string token{tokens.front()};
    tokens.pop();

    if (token == "#") {
      return nullptr;
    }

    TreeNode* root{new TreeNode(stoi(token))};
    root->val = stoi(token);
    root->left = _deserialize(tokens);
    root->right = _deserialize(tokens);

    return root;
  }
};

/* ----------------------------- iteration 2 -------------------------------*/
// Using istringstream and ostringstream
class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        ostringstream out;
        _serialize(root, out);
        return out.str();
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        istringstream in(data);
        return _deserialize(in);
    }

private:
    void _serialize(TreeNode* root, ostringstream& out) {
        if (!root) {
            out << "#,";
            return;
        }
        out << root->val << ",";
        _serialize(root->left, out);
        _serialize(root->right, out);
    }

    TreeNode* _deserialize(istringstream& in) {
        string token;
        getline(in, token, ',');
        if (token == "#") {
            return nullptr;
        }
        TreeNode* root = new TreeNode(stoi(token));
        root->left = _deserialize(in);
        root->right = _deserialize(in);
        return root;
    }
};

