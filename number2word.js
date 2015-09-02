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
  var getNumDigits = function(number) {
    return number.toString().length;
  }

  var simpleParser = function(number) {
    var digits = getNumDigits(number);

    // Slice the number
    
  }

};