#include <vector>
#include <algorithm>

using namespace std;

// C value of uninitialized vector in
// https://stackoverflow.com/questions/5222404/c-value-of-uninitialized-vectorint


// Can also use next, prev, advance

class Solution {
public:
  vector< vector<int> > threeSum(vector<int>& nums) {
    vector< vector<int> > result;
    sort(nums.begin(), nums.end());
    if (nums.size() < 3) return result;

    const int target = 0;
    auto last = nums.end();
    for (auto i: nums) {
      if (i > nums.begin() && *i == *(i - 1)) continue;
      auto j = i + 1;
      auto k = last - 1;
      while(j < k) {
        if (*i + *j + *k < target) {
          j+=1;
          while( *j == *(j - 1) ) i+=1;
        } else if(*i + *j + *k > target) {
          k-=1;
          while ( *k == *(k + 1) ) k-= 1;
        } else {
          result.push_back({*i, *j, *k});
          j+=1;
          k-=1;
          while( *j == *(j - 1) ) i+=1;
          while( *k == *(k + 1) ) k-= 1;
        }
      }
    }
    return result;
  }
};
