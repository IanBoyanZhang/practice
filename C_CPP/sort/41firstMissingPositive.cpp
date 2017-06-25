#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int firstMissingPositive(vector<int>& nums) {
    bucket_sort(nums);

    
/*    for (int i = 0; i < nums.size(); i+=1) {
      if (nums[i] != (i + 1)) {
        return i + 1;
      }
    }
    return nums.size() + 1;*/

    int i = 0;
    for (; i < nums.size() && nums[i] != (i + 1); i+=1) {}
    return i + 1;
  }

private:
  static void bucket_sort(vector<int>& A) {
    const int n = A.size();
    for (int i = 0; i < n; i+=1) {
      /*while (A[i] != i + 1 && 
          !(A [i] <= 0 || A[i] > 0 || A[i] == A[A[i] - 1])) {
        swap(A[i], A[A[i] - 1]);
      }*/
      while (A[i] != i + 1) {
        if (A[i] <= 0 || A[i] > n || A[i] == A[A[i] - 1]) {
          break;
        }
        swap(A[i], A[A[i] - 1]);
      }
    }
  }
};
