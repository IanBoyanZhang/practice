/**
 * @param {string} s 
 * @param {string []} words 
 * @return {number []} 
 * Words are all in same length
 * All word in word list has to present and only once
 */

// Essentially O(n^2) solution
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
  
  var HASH = setupHash();
  
  var validator = function(str) {
    var padbackHash = {};
    var currWord;
    for (var i = 0, len = str.length; i < len; ) {
      currWord = "";
      for (var iter = 0; iter < wLen; iter++) {
        currWord += str[i + iter];
      }
      padbackHash[currWord] = padbackHash[currWord] || 0;
      padbackHash[currWord] += 1;
      if (padbackHash[currWord] > HASH[currWord] || HASH[currWord] === undefined) return false;
      i = next(i, wLen);
    }
    return true;
  };

  var substr = "";
  for (var i = 0; i < sLen - effLen + 1;) {
    substr = s.slice(i, i+effLen);
    if (validator(substr)) wBucket.push(i);
//    i = next(i, wLen);
    i+=1;
  }

  return wBucket;
};

var s = "barfoothefoobarman";
var words = ["foo", "bar"];
console.log(findSubstring(s, words));

s = "wordgoodgoodgoodbestword";
words = ["word","good","best","good"];
console.log(findSubstring(s, words));


s = "barfoofoobarthefoobarman";
words = ["bar","foo","the"];
console.log(findSubstring(s, words));

s = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
words = ["fooo","barr","wing","ding","wing"];
console.log(findSubstring(s, words));
