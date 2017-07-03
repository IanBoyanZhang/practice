#include <vector>
#include <unordered_map>

using namespace std;
class Solution {
public:
  vector< vector<int> > fourSum(vector<int>& nums, int target) {
    vector< vector<int> > result;
    unordered_map<int, vector< pair<int, int> > >cache;
    for(size_t i = 0; i < nums.size() - 1; i+=1) {
      for (size_t j = i + 1; j < nums.size(); j += 1) {
        cache[nums[i] + nums[j]].push_back(pair<int, int>(i, j));
      }
    }

    for (size_t a = 0; a < nums.size() - 1; a+=1) {
      for (size_t b = 0; b < nums.size(); b+=1) {
        int key = target - nums[a] - nums[b]; 
        if (cache.find(key) == cache.end()) continue;

        const auto &vec = cache[key];
        for (size_t c = 0; c < vec.size(); c+=1) {
          if (a <= vec[c].second) {
            continue;
          }

          result.push_back({nums[vec[k].first], nums[vec[k].second], nums[a], nums[b]});
        }
      }
    }

    sort(result.begin(), result.end());
    result.erase(unique(result.begin(), result.end()), result.end());
    return result;
  }
};
