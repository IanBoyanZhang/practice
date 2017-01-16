/**
 * @param {string} str
 * @return {string}
 *
 */

var reverseWords = function(str) {
  str = str.trim();
  str = str.replace(/\s+/g, ' ');
  var arr = str.split(' ').reverse();
  return arr.join(' ');
};
