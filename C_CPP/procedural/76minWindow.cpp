#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  string minWindow(string s, string t) {
    if (t == "") return "";
    if (s.size() <= t.size()) return "";
    
    // Initialize hash
    const int ASCII_MAX = 256;
    int appeared[ASCII_MAX];
    int expected[ASCII_MAX];
    fill(appeared, appeared + ASCII_MAX, 0);
    fill(expected, expected + ASCII_MAX, 0);

    int s_s = s.size();
    int t_s = t.size();
    int appeared_count = 0;
    for (size_t i = 0; i < t_s; i+=1) {
      expected[t[i]] += 1;
    }

    int b_i = 0, e_i = 0;

    int min_width = INT_MAX;
    int min_start = 0;

//    int b_win = 0, e_win = s_s - 1;
    // Progress to b_i
    for (e_i = 0; e_i < s_s; e_i += 1) {
      if(expected[s[e_i]] > 0) {
        appeared[e_i] += 1;
        if (appeared[s[e_i]] <= expected[s[e_i]]) {
          appeared_count += 1;
        }
      }

      // Now progress head pointer
      if (appeared_count == t_s) {
        while(appeared[s[b_i]] > expected[s[b_i]]
            || expected[s[b_i]] == 0) {
          appeared[s[b_i]]-=1;
          b_i += 1;
        }
        if (min_width > (e_i - b_i + 1)) {
          min_width = e_i - b_i + 1;
          min_start = b_i;
        }
      }
    }
    return min_width == INT_MAX ? "" : s.substr(min_start, min_width);
  }
};
