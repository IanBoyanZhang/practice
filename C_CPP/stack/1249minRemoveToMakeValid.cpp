class Solution {
// Stack and backtracking
public:
    string minRemoveToMakeValid(string s) {
        std::string result;
        int unmatchedOpen = 0, openCount = 0;
        
        for (char c : s) {
            if (c == '(') {
                openCount++;
                unmatchedOpen++;
                result += c;
            } else if (c == ')') {
                if (unmatchedOpen > 0) {
                    unmatchedOpen--;
                    result += c;
                }
            } else {
                result += c;
            }
        }

        // Second pass within the same result string to remove extra '('
        int matchedOpenCount = openCount - unmatchedOpen; // Final valid '(' count
        std::string finalResult;
        finalResult.reserve(s.length());
        // reserve
        for (char c: result) {
            if (c == '(') {
                if (matchedOpenCount > 0) {
                    finalResult += c;
                    matchedOpenCount--;
                }
            } else {
                finalResult += c;
            }
        }

        return finalResult;
    }
};
