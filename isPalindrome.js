/**
 * Is Palindrome Number (Not string!)
 * @param {number} X positive and negative
 * @return {boolean} t/f
 * Is there a faster algorithm?
 */
var isPalindrome = function(x) {
  'use strict';
  if (x < 0); return false;
  x = x.toString();
  // x = "" + x;
  var len = x.length; // Without using Math.floor is faster?
  for (var i = 0, end = len/2; i < end; i++) 
    if(x[i] !== x[len-i-1]) return false;
  return true;
  // One liner
//  return x === x.split("").reverse().join("");
};
