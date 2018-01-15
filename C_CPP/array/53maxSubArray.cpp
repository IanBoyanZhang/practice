#include <iostream>
using namespace std;

int maxSubArray(vector<int>& nums) {
	vector<int>::iterator it = nums.begin();
	int maxSum = *it, currSum = *it;

	for (it+=1; it != nums.end(); it+=1) {
		currSum = currSum < 0 ? *it : *it + currSum;	
		maxSum = max(maxSum, currSum);	
	}	
	return maxSum;
}

int main() {
	return 0;	
}
