/**
 * @param {string} s 
 * @param {string []} words 
 * @return {number []} 
 *
 */

var findSubstring = function(s, words) {
  var wBucket = [];
  if (s === "" || words.length === 0) return wBucket;
  var wLen = words[0].length, wordsLen = words.length, sLen = s.length;
  
  var getWord = function(sIdx, arr) {
    // arr -> s
    var word = "";
    for (var i = sIdx; i < wLen; i++) {
      if(arr[i] === undefined) return "";
      word+=arr[i];
    }
    return word;
  };

  var next = function(sIdx, wLen) {
    return sIdx += wLen;
  };

  var setupHash = function() {
    var hash = {};
    for (var iter = 0; iter < wordsLen; iter++) {
      hash[words[iter]] = hash[words[iter]] || 1;
    }
    return hash;
  };
  
  var validator = function(str) {
    var hash = setupHash();
    var hashLen = wordsLen;
    var currWord = "";
    for (var i = 0, len = str.length; i < len; ) {
      currWord = getWord(i, str);
      if (!hash[currWord]) return false;
      hash[currWord]-=1;
      hashLen-=1;
      i = next(i, wLen);
    }
    if (hashLen) return false;
    return true;
  };

  var substr = "";
  for (var i = 0; i < sLen;) {
    substr = s.slice(i);
    if (validator(substr)) wBucket.push(i);
    i = next(i, wLen);
  }

  return wBucket;
};
