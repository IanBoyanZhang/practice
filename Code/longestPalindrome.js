var longestLongestPalindrome = function(str){
 var longest = '';
  var isPalindrome = function(str) {
   for(var i = 0; i < str.length/2; i++){
     if (str[i] !== str[str.length-i-1]) {
       return false;
     }
   }
   return true;
  }
 for (var i = 0; i < str.length; i++) {
  for (var j = i; j < str.length; j++){
    var sub = str.slice(i, j+1);
    var p = isPalindrome(sub);
    if (p && longest.length < sub.length) {
      longest = sub;
    }
  }
 }
 return longest;
}

var longestPalindrome = function(string) {
  var length = string.length;
  var result = "";
  var longestPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      left--;
      right++;
    }
    return string.slice(left+1, right);
  };
  // Loop through the whole string,
  // checking for palindromes
  for (var i = 0; i < length; i++) {
    var oddPal = longestPalindrome(i - 1, i + 1);
    var evenPal = (i + 1 < length) ? longestPalindrome(i, i + 1) : '';
    if (oddPal.length > result.length)
      result = oddPal;
    if (evenPal.length > result.length)
      result = evenPal;
  }
  return result;
}
// Linear Solution:
// http://leetcode.com/2011/11/longest-palindromic-substring-part-ii.html
Add Comment