#include <vector>

using namespace std;

// Reference: 
// http://blog.csdn.net/happyaaaaaaaaaaa/article/details/51525714

class Solution {
public:
	int findMin(vector<int>& nums) {
		int left = 0, right = nums.size() - 1;
		while (left < right) {
			// int mid = left + (right - left)/2;
			int mid = (left + right)/2;
			if (nums[mid] < nums[right]) { right = mid; }
			else { left = mid + 1; }
		}
		return nums[right];
	}
}
