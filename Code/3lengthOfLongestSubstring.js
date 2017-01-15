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
