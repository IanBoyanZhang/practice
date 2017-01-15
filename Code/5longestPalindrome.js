/**
 * @param {string} s
 * @return {string}
 *
 */
// https://leetcode.com/articles/longest-palindromic-substring/
// Expand around center O(n^2)
var longestPalindrome = function(s) {
  var expandAroundCenter = function(s, left, right) {
    var L = left, R = right;
    while(L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
      L--;
      R++;
    }
    return R - L - 1;
  };

  var start = 0, end = 0;
  for (var i = 0; i < s.length; i+=1) {
    var len1 = expandAroundCenter(s, i, 1);
    var len2 = expandAroundCenter(s, i, i + 1);
    var len = Math.max(len1, len2);
    if(len > end - start) {
      start = i - Math.floor((len - 1)/2);
      end = i + Math.floor(len/2);
    }
  }
  return s.substring(start, end + 1);
};

var str = "aba";
//var str = "babad";
var str = "cbbd";
var rtn = longestPalindrome(str);
console.log(rtn);
var str = "babad";
var rtn = longestPalindrome(str);
console.log(rtn);
