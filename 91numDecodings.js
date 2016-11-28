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
    if (s[l] === '0') return;
    if (l === len - 1) return cnt+=1;
    var num = Number(s[l] + s[l+1]);
    if (l === len - 2) {
      if (num <= 26) cnt+=1;
      return rec(s, l+1);
    }

    if (num <= 26) rec(s, l+2);
    rec(s, l+1);
  };

  rec(s, 0);
  return cnt;
};


/*var string = '123123';
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
console.log(rtn);*/

// Third attempt O(n) time O(1) space
// Fibonacci DP
var numDecodings = function(s) {
  var c = [0, 1], i = 2;
  var fib = function(n) {
    if (n < 2) return 1;
    c[n] = c[n] || fib(n - 1) + fib(n-2);
    return c[n];
  };
  // running length
  var cnt = 1;
  if (s[0] === '0' || s[0] === undefined) return 0;
  var str = s[0], l = s.length, num;
  for ( i = 0; i < l - 1; i += 1) {
    num = Number(s[i] + s[i + 1]);
    if (!num) return 0;
    if (num === 10 || num === 20) {
      cnt = fib(str.length - 1) * cnt;
      str = s[i+1];
      continue;
    }

    if (num > 26 && s[i+1] === '0') return 0;

    if (num > 26 || num < 10) {
      cnt = fib(str.length) * cnt;
      str = s[i+1];
      continue;
    }

    str += s[i + 1];
  }
  // residual
  cnt = fib(str.length) * cnt;
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
var string = '100';
rtn = numDecodings(string);
console.log(rtn);
var string = '230';
rtn = numDecodings(string);
console.log(rtn);
