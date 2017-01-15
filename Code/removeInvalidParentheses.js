/**
 * @param {string} s
 * @return {string[]}
 *
 */

// Examples:
// "()())()" --> ["()()()", "(())()"];
// "(a)())()" --> ["(a)()()", "(a())()"]
// ")(" -> [""]
//
// Strategy DFS
var removeInvalidParentheses = function(s) {
  'use strict';
  // Naive implementation
  var result = [], openStack = [], closeStack = [];
  // First pass
  for (var i = 0, len = s.length; i < len; i++) {
    if (s[i] === "(" ) openStack.push(i);
    if (s[i] === ")" ) closeStack.push(i);
   }

  // Check which symbol to watch openning parenthesis or close parenthesis ? 
  var openlen = openStack.length, closelen = closeStack.length, targetSymbol = null, diff = openlen - closelen;
  targetSymbol = openlen === closelen ? isValid(s) : 
                 openlen <   closelen ? ")" : "(";
  // if no number miss-match
  if (typeof targetSymbol !== 'string') return targetSymbol ? result.push(s) : result.push("");

  // Now looping through target symbol stack then remove target symbol
  // Feeding after processed strings to validator
  // Continously case is consider one case
  
  // Second pass
  // How to check duplicate

  len = Math.max(openlen, closelen);
  var candidate = openlen > closelen ? openStack : closeStack;

  var strProcessor = function(str, subBuf) {
    var newStr = "", prevIdx = 0;
    subBuf.forEach(function(idx) {
      newStr += str.slice(prevIdx, idx);
      prevIdx = idx+1;
    });
    newStr += str.slice(prevIdx);
    return newStr;
  };

  // Perform DFS
  var recurse = function(buf) {
    // Base case':
    if (buf.length === diff) {
      var newStr = strProcessor(s, buf);
      // Valid string here
      if (isValid(newStr)) result.push(newStr);
      return;
    }

    // iterate through
    for (var i = 0; i < len; i++) {
      buf.push(candidate[i]);
      recurse(buf);
      buf.pop(candidate[i]);
    }
  };

  recurse([]);
  
  // helper function
  var isValid = function(str) {
    var counter = 0;
    for (var i = 0, len = str.length; i < len; i++) {
      if (str[i] === "(") counter++;
      if (str[i] === ")") { 
        counter--; 
        if (counter < 0 ) return false;
      }
    }
    return counter === 0;
  };
  return result;
};

// Basic Test Cases

// "()())()" --> ["()()()", "(())()"];
var str = "()())()";
console.log(removeInvalidParentheses(str));
