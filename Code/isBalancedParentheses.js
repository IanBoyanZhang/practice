// Task:
// Generate a string with N opening brackets("[") and N closing brackets ("]"), in some arbitrary order.
// Determine whether the generated string is balanced, that is, whether it consists entirely of pairs of opening/closing brackets (in that order),
// none of which mis-nest.
//
// (empty) OK
// []      OK ][     NOT OK
// [][]    OK ][][   NOT OK
// [[][]]  OK []][[] NOT OK

// JavaScript Implementation
var createRandomBracketSequence = function(maxlen) {
  var result = [], chars = ["[", "]"];
  // RandomBinary(0/1) Generator
  function getRandomInteger(to) {
    return Math.floor(Math.random() * (to + 1));
  }
  for (var i = 0; i < maxlen; i++) {
    result.push(chars[getRandomInteger(1)]);
  }
  return result.join("");
};

// console.log(createRandomBracketSequence(5));
var isBalanced = function(str) {
  var counter = 0, openClose = ['[', ']'];
  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] === openClose[0]) counter++;
    if (str[i] === openClose[1]) {
      counter--;
      if (counter < 0) return false;
    }
  }
  return counter === 0;
};

// Test cases
var bracketStr = createRandomBracketSequence(4);
console.log(bracketStr);
console.log(isBalanced(bracketStr));
