#include <vector>

using namespace std;

class Solution {
  public:
    vector< vector<int> > permutationUnique(vector<int>& nums) {
      vector< vector<int> > result;
      dfs(nums, 0, result);
      return result;
    }

    bool contains_duplicates(vector<int>& nums, int start, int end) {
      for (size_t i = start; i < end; i+=1) {
        if(nums[i] == nums[end]) {
          return true;
        }
      }
      return false;
    }

    void dfs(vector<int>& nums, int l, vector< vector<int> >& res) {
      if (l == nums.size()) {
        res.push_back(nums);
        return;
      }

      for (size_t i = l; i < nums.size(); i+=1) {
        if (contains_duplicates(nums, l, i)) continue;
        swap(nums[i], nums[l]);
        dfs(nums, l + 1, res);
        // Recover the stack sequence
        swap(nums[i], nums[l]);
      }
    }
};
