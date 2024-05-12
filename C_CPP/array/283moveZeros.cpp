// O(n) Time complexity, no extra space used. 

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        std::size_t count{0U};
        for (std::size_t i{0U}; i < nums.size(); i++) {
            if (nums[i] != 0) {
                nums[count++] = nums[i];
            }
        }

        if (count < nums.size()) {
            std::fill(nums.begin() + count, nums.end(), 0);
        }
    }
};
