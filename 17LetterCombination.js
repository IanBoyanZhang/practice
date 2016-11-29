/**
 * @param {string} digits
 * @return {string[]}
 */
// what error will it cause? if tb is a global variable?
var letterCombinations = function(digits) {
  var a = [];
  var t = ['', '*', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  if (!digits) return a;
  var rec = function(d, b) {
    if (d === '') { return a.push(b);}
    var tb = t[Number(d[0])];
    for (var i = 0; i < tb.length; i+=1)
      rec(d.substring(1), b + tb[i]);
  };
  rec(digits, '');
  return a;
};

// How to optimize?
