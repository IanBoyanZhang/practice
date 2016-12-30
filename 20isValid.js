/**
 * @param {string} s
 * @return {boolean}
 *
 */
// http://yucoding.blogspot.com/2013/02/leetcode-question-121-valid-parentheses.html
var isValid = function(s) {
  var stack = [];
  for (var i = 0, l = s.length; i < l; i+=1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (!stack.length) return false;
      if (s[i] === ')' && stack[stack.length - 1] !== '(') return false;
      if (s[i] === '}' && stack[stack.length - 1] !== '{') return false;
      if (s[i] === ']' && stack[stack.length - 1] !== '[') return false;
      stack.pop();
    }
  }
  return stack.length === 0;
};

var isValid = function(s) {
  var stack = [];
  var h = {};
  h[')'] = '(';
  h[']'] = '[';
  h['}'] = '{';
  for (var i = 0, l = s.length; i < l; i+=1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      if (!stack.length) return false;
      if (h[s[i]] && stack[stack.length - 1] !== h[s[i]]) return false;
      stack.pop();
    }
  }
  return !stack.length;
};
