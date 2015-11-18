/**
 * @param {string} s 
 * @param {string []} words 
 * @return {number []} 
 * Words are all in same length
 * All word in word list has to present and only once
 */

var findSubstring = function(s, words) {
  var wBucket = [];
  if (s === "" || words.length === 0) return wBucket;
  var wLen = words[0].length, wordsLen = words.length, sLen = s.length;
  
  // find effective candidates length
  var effLen = wLen*wordsLen;

  var next = function(sIdx, wLen) {
    return sIdx += wLen;
  };

  var setupHash = function() {
    var hash = {};
    for (var iter = 0; iter < wordsLen; iter++) {
      hash[words[iter]] = hash[words[iter]] || 0;
      hash[words[iter]]++;
    }
    return hash;
  };
  
  var validator = function(str) {
    var hash = setupHash();
//    console.log(hash);
//    console.log("In validator: " + str);
    var currWord;
    for (var i = 0, len = str.length; i < len; ) {
      currWord = "";
      for (var iter = 0; iter < wLen; iter++) {
        currWord += str[i + iter];
      }
//      console.log("currWord-> ", currWord, "i: ", i, "str ", str);
      if (!hash[currWord]) return false;
      hash[currWord]-=1;
      i = next(i, wLen);
    }
    return true;
  };

  var substr = "";
  for (var i = 0; i < sLen - effLen + 1;) {
    substr = s.slice(i, i+effLen);
    if (validator(substr)) wBucket.push(i);
    i = next(i, wLen);
  }

  return wBucket;
};

var s = "barfoothefoobarman";
var words = ["foo", "bar"];
console.log(findSubstring(s, words));

s = "wordgoodgoodgoodbestword";
words = ["word","good","best","good"];
console.log(findSubstring(s, words));
