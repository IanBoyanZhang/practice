/**
 * @constructor
 * @param {string[]} words
 *
 */
// Time Limit Exceed (TLE)_
var WordDistance = function(words) {
  this.words = words;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 *
 */
WordDistance.prototype.shortest = function(word1, word2) {
  var len = this.words.length;
  var hash = {};
  var i, j;
  for (i = 0; i < len; i+=1) {
    hash[this.words[i]] = hash[this.words[i]] || [];
    hash[this.words[i]].push(i);
  }

  var a = hash[word1];
  var b = hash[word2];

  if(!a.length || !b.length) {
    return null;
  }
  var min = Number.MAX_SAFE_INTEGER;
  for(i = 0; i < a.length; i+=1) {
    for(j = 0; j < b.length; j+=1) {
      min = Math.min(min, Math.abs(a[i] - b[i]));
    }
  }
  return min;
};
