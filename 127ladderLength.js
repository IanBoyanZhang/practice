/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 * @return {number}
 *
 */
// https://github.com/chihungyu1116/leetcode-javascript/blob/master/127%20Word%20Ladder.js
// Javascript hash is slower than setc
var ladderLength = function(beginWord, endWord, wordList) {
    var visited = new Set();
    var queue = [];
    var level = 1;
    queue.push(beginWord);
    visited.add(beginWord);

    while(queue.length) {
      var len = queue.length;
      for (var i = 0; i < len; i+=1) {
        var word = queue.shift();
        for (var j = 0; j < word.length; j+=1) {
          for (var k = 0; k < 26; k+=1) {
            var newWord = word.substring(0, j) + String.fromCharCode(97 + k) + word.substring(j + 1);

            if (newWord === endWord) {
              return level + 1;
            }
            if (wordList.has(newWord) && !visited.has(newWord)) {
              queue.push(newWord);
              visited.add(newWord);
            }
          }
        }
      }
      level+=1;
    }
    return 0;
};
