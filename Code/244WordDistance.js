/**
 * @constructor
 * @param {string[]} words
 *
 */
// Time Limit Exceed (TLE)_
var WordDistance = function(words) {
//  this.words = words;
  this.positions = {};
  var i, len = words.length;
  for(i = 0; i < len; i+=1) {
    this.positions[words[i]] = this.positions[words[i]] || [];
    this.positions[words[i]].push(i);
  }
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {integer}
 *
 */
WordDistance.prototype.shortest = function(word1, word2) {
  var i = 0, j = 0;
  var a = this.positions[word1];
  var b = this.positions[word2];

/*  if(!a.length || !b.length) {
    return null;
  }*/
//  var min = Number.MAX_SAFE_INTEGER;
  var min = Infinity;
  while(i < pos1.length && j < pos2.length) {
    var i1 = a[i];
    var i2 = b[j];

    min = Math.min(min, Math.abs(i1 - i2));
    if (i1 < i2) {
      i+=1;
    } else {
      j+=1;
    }
  }
  return min;
};
