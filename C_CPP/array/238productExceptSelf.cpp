// The intuition is left so far, right so far before the "current" one

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> answers(nums.size(), 1);

        int lefts = 1;
        for (int i = 0; i < nums.size(); i++) {
            answers[i] *= lefts;
            lefts = lefts * nums[i];
        }

        int rights = 1;
        for (int i = nums.size() - 1; i >= 0; i--) {
            answers[i] *= rights;
            rights = rights * nums[i];
        }

        return answers;
    }
};
