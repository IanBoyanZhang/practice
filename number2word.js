'use strict'
/**
 * @param {number} num
 * @return {string}
 */

/* Integer to English word
 * Given input is guaranteed to be less than 2^31 - 1
 */
var numberToWords = function(num) {
  var ToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  var ToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
  };


  // check how many bits 
  // var getNumDigits = function(number) {
  //   return number.toString().length;
  // }

  // var rtnStr = "";
  // var thCounter = 0;
  // var simpleParser = function(str, number) {
  //   // simple parser
  //   var divider = 100;
  //   var order = Math.floor(number / divider);
  //   var digit = number % divider;
  //   rtnStr = ToWords[order] + " " + ToPlace[divider];
  //   // divide divider
  //   divider = divider / 10;
  //   var residue = digit % divider; 
  //   var teens = Math.floor(digit / divider);

  //   rtnStr = rtnStr + " " + ToWords[teens] + " " + ToWords[residue];
  //   return rtnStr;
  // }

  // // chunk numbers into pieces
  // var recursiveParser = function(number) {
  //   if (number < 1000) {
  //     rtnStr = simpleParser(rtnStr, number);
  //   } else {
  //     // divide by 1000 then call recursion
  //     var newNum = rtnStr/1000;
  //   }
  // }

  // recursiveParser(num);

  
  return rtnStr;
};

console.log(numberToWords(385));