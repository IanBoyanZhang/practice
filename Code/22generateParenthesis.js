/**
 * @param {number} n
 * @return {string[]}
 *
 */
// s # of opening parenthesis
var generateParenthesis = function(n) {
  var r = [], n2 = 2*n;
  var rec = function(b, s) {
    var bl = b.length;
    // base
    if (s < 0 || bl > n2 || n2 - bl < s) return;
    if (bl === n2 && s === 0)
      return r.push(b);
    rec(b + '(', s+1);
    rec(b + ')', s-1);
  };
  rec('(', 1);
  return r;
};
var rtn = generateParenthesis(3);
console.log(rtn);
var rtn = generateParenthesis(0);
console.log(rtn);

// How to optimize?
