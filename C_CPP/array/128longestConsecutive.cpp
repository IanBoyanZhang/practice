#include <vector>
#include <unordered_set>

using namespace std;

class Solution {
public:
  int longestConsecutive(vector<int>& nums) {
    unordered_set<int> nums_set;
    for (auto i : nums) nums_set.insert(i);

    int max_length = 1;
    for (auto i:nums) {
      int length = 1;
      for (auto j = i - 1; nums_set.find(j) != nums_set.end(); j-=1) {
        length += 1;
      }
      for (auto j = i + 1; nums_set.find(j) != nums_set.end(); j+=1) {
        length += 1;
      }

      max_length = max(max_length, length);
    }
    return max_length;
  }
};
