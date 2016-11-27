/**
 * @param {string} s
 * @return {number}
 *
 */
// TODO: using cache to rggister results
// Time Limit Excedded
var numDecodings = function(s) {
  var cnt = 0;
  var len = s.length;
  if (len === 0) return cnt;
  var rec = function(s, l) {
    // base conidtion
    if (s[l] === '0') return;
    if (l === len - 1) return cnt+=1;
    var num = Number(s[l] + s[l+1]);
    if (l === len - 2) {
//      if (s[l] === '0') return;
      if (num <= 26) cnt+=1;
      return rec(s, l+1);
    }

    if (num <= 26) rec(s, l+2);
    rec(s, l+1);
  };

  rec(s, 0);
  return cnt;
};

var string = '123123';
var rtn = numDecodings(string);
console.log(rtn);
var string = '231231';
var rtn = numDecodings(string);
console.log(rtn);
var string = '32';
var rtn = numDecodings(string);
console.log(rtn);
var string = '01122';
var rtn = numDecodings(string);
console.log(rtn);
var string = '2201';
var rtn = numDecodings(string);
console.log(rtn);
var string = '0';
var rtn = numDecodings(string);
console.log(rtn);
var string = "9371597631128776948387197132267188677349946742344217846154932859125134924241649584251978418763151253";
rtn = numDecodings(string);
console.log(rtn);
