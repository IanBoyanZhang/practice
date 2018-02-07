/**
 * @param {string} s
 * @return {number}
 *
 */
var lengthOfLongestSubstring = function(s) {
  var hash = {};
  var start = 0;
  var max = 0;
  for(var i = 0, len = s.length; i < len; i+=1) {
    var item = s[i];
    if(!hash[item]) {
      hash[item] = true;
    } else {
      // item in substring
      // for second ptr start to catch up
      // reset catch
      for(;;){
        console.log(start);
        if (s[start] === item) {
          start += 1;
          break;
        }
        hash[s[start]] = false;
        start += 1;
      }
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

//var str = "abcabcbb";
//var str = "bbbbb";
var str = "pwwkew";
var str = "aab";
var str = "bbbbb";
var str = "abca";
var rtn = lengthOfLongestSubstring(str);
console.log(rtn);

// https://leetcode.com/articles/longest-substring-without-repeating-characters/
// Sliding window optimized
// Define a mapping of the characters to its index
// Then we can skip the characters immediately when we found a repeated character
// No need to skip over little by little. 
// let i be j + 1 directly
// Skip over entirely : i = Math.max

var lengthOfLongestSubstring = function(s) {
	var j = 0, i = 0;
	var hash = {};
	var ans = 0;
	for (; j < s.length; j+=1) {
		if (hash[s[j]] !== undefined) {
			i = Math.max(hash[s[j]], i);
		}
		ans = Math.max(ans, j - i + 1);
		hash[s[j]] = j + 1;
	}
	return ans;
};
