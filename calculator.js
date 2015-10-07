/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var string = s;
  var nums = [];
  var ops = [];

  var num = 0;
  var result = 0;
  var sign = 1;

  var symbolLookup = ['+', '-', '(', ')'];
  var isDigit = function(character) {
  	var charCodeAt = String.prototype.charCodeAt;
  	return charCodeAt.call(character) >= 48 && charCodeAt.call(character) <= 57;
  }

  // check if 
  for (var i = 0, len = string.length; i < len; i++) {
  	// We might not
  	var c = string[i];
  	if (isDigit(c)) {
  	  num = num * 10 + parseInt(c) - '0';
  	} else {
  	  result += sign * num;
  	  num = 0;
  	  if (c === symbolLookup[0]) sign = 1;
  	  if (c === symbolLookup[1]) sign = -1;
  	  if (c === symbolLookup[2]) {
  	  	nums.push(result);
  	  	ops.push(sign);
  	  	result = 0;
  	  	sign = 1;
  	  }
  	  if (c === symbolLookup[3] && ops.length) {
  	  	result = ops[ops.length - 1 ] * result + nums[nums.length - 1];
  	  	ops.pop(); nums.pop();
  	  }
  	}
  }
  result += sign * num;
  return result;
};

console.log(calculate("5 + 3"));