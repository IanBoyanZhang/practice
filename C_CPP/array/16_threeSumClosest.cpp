#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution {
  public:
    int threeSumClosest(vector<int>& nums, int target) {
      int gap = INT_MAX;
      sort(nums.begin(), nums.end());
      int min_res;
      auto last = nums.end();
      for (auto i = nums.begin(); i < last - 2; i+=1) {
        auto k = prev(last);
        auto j = next(i);
        while(j < k) {
          int res = *i + *j + *k;
          if (fabs(res - target) < gap) {
            gap = fabs(res - target);
            min_res = res;
          }
          if (res < target) {
            advance(j, 1);
          } else if (res > target) {
            advance(k, -1);
          } else {
            return res;
          }
        }
      }
      return min_res;
    }
};
