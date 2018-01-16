#include <iostream>
#include <vector>
#include <stack>
#include <cmath>

using namespace std;

class Solution {
public:
  // It is essentially using an increasing stack
  int largestRectangleArea(vector<int>& heights) {
    stack<int> s; 
    int t = 0; int result = 0;
    // For collecting results
    heights.push_back(0);
    while(t < heights.size()) {
      // Make sure the stack keeps increasing
      if (s.empty() || heights[t] > heights[s.top()]) {
        s.push(t++);
        continue;
      }

      // Get top element of stack which is tallest so far
      int tmp = s.top();
      s.pop();

      // If current stack is empty() top element is shortest to the left 
      // Combining stack till current top is smaller than current element
      result = max(result, heights[tmp] * (s.empty() ? t : t - (s.top() - 1)));
    }
    return result;
  }
};
