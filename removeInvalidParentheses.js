/**
 * @param {string} s
 * @return {string[]}
 *
 */

// Examples:
// "()())()" --> ["()()()", "(())()"];
// "(a)())()" --> ["(a)()()", "(a())()"]
// ")(" -> [""]
var removeInvalidParentheses = function(s) {
  // Naive implementation
  openStack = [];
  closeStack = [];
  // First pass
  for (var i = 0, len = s.length; i < len; i++) {
    if (s[i] === "(" ) openStack.push(i);
    if (s[i] === ")" ) closeStack.push(i);

  }

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
};
