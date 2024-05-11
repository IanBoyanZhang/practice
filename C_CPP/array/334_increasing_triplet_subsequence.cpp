/* Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
 * Formally the function should:
 * Return true if there exists i, j, k 
 * such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
 * Your algorithm should run in O(n) time complexity and O(1) space complexity.
 * Examples:
 * Given [1, 2, 3, 4, 5],
 * return true.
 * Given [5, 4, 3, 2, 1],
 * return false.
 * Similar Problems: (M) Longest Increasing Subsequence
 */
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int num1 = INT_MAX, num2 = INT_MAX;
        for (auto num : nums) {
            if (num <= num1) { // Equal sign is important (as a tie breaker, keep index progressing to the end of array)
                num1 = num;
            } else if (num <= num2) { // Equal sign is important (as a tie breaker, keep index progressing to the end of array)
                num2 = num;
            } else {
                return true;
            }
        }
        return false;
    }
};
