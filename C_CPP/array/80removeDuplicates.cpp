#include <vector>
using namespace std;
class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
    if (nums.size() <= 2) return nums.size();

    // index new array spot
    // index also serves as occurence counter
    int index = 2;
    for (int i = 2; i < nums.size(); i +=1) {
      if(nums[i] != nums[index - 2]) 
        nums[index++] = nums[i];
    }
    return index;
  }
};
