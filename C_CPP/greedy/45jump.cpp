#include <vector>

using namespace std;

// An DP dynamic programming + Greedy solution
// The final solution illustrated here is really succinct, 
// I really like it.
class solution {
public:
  int jump(vector<int>& nums) {
    int steps = 0;
    // The maximum distance that has been reached
    int last = 0;
    // Keeps tracking the maximum distance can be reached by using previous steps
    int cur = 0, n = nums.size();

    for (int i = 0; i < n; i+=1) {
      // Need to take one step reach current index
      if (i > last) {
        last = cur;
        steps += 1;
      }
      // Keeps tracking best potential index can be reach under current step
      cur = max(cur, i + nums[i]);
    }
    return steps;
  }
};
