#include <vector>

using namespace std;

// Recursive Heap`s algo for generating all permutations
class Solution {
  public:
    vector< vector<int> > permute(vector<int>& nums) {
      vector< vector<int> > res;
      generate(nums, nums.size(), res);
      return res;
    }

    // Util function
    void generate(vector<int>& A, int size, vector< vector<int> > results) {
      if (size == 1) {
        results.push_back(A);
        return;
      }
      for(size_t i = 0; i < size; i+=1) {
        generate(A, size - 1, results);

        size % 2 ? swap(A[0], A[size - 1]) : swap(A[i], A[size - 1]);
      }
    } 
};
