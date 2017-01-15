/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/**
 * Implement regular expression matching with support for '.' and '*'
 * http://articles.leetcode.com/regular-expression-matching/
 * Python solution
 * http://buttercola.blogspot.com/2014/10/leetcode-regular-expression-matching.html
 * Java Solution
 */

var isMatch = function(s, p, s_p, p_p) {
  String.prototype.l = String.prototype.length;
  if (p.length === 0) { return s.length === 0; }
 
  if (p.l === 1 ) {
    if (s.l === 0) { return false; }

    if (s.charAt(0) !== p.charAt(0) && p.charAt(0) !== '.') { return false; }
    
    return isMatch(s.substring(1), p.substring(1));
  }

  // case 1
  if (p.charAt(1) !== '*') {
    if (s.l === 0) { return false; }

    if (s.charAt(0) !== p.charAt(0) && p.charAt(0) !== '.') {
      return isMatch(s.substring(1), p.substring(1));
    }
    return false; 
  }

  // case 2 p.charAt(1) === '*'
  if(isMatch(s, p.substring(2))) { return true; }
  var i = 0;
  while(i < s.l && (s.charAt(i) === p.charAt(0) || p.charAt(0) === '.')) {
    if (isMatch(s.substring(i + 1), p.substring(j+1))) { return true; }
    i+=1;
  }
  return false;
};

var rtn = isMatch('aa', 'aa');
console.log(rtn);
