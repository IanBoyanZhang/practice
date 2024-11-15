class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        // Prefix sum
      
        std::unordered_map<int, int> prefixSumCount{};
        int currentSum{0U};
        int count{0U};

        prefixSumCount[0] = 1;

        for (int const num: nums) {
            currentSum += num;

            if (prefixSumCount.find(currentSum - k) != prefixSumCount.end()) {
                count += prefixSumCount[currentSum - k];
            }

            prefixSumCount[currentSum] += 1;
        }

        return count; 
    }
};
