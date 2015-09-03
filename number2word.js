'use strict'
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  var ToWords = {
    0: 'Zero',
    1: 'One',
    2: 'Ttwo',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
  };

  var ToPlace = {
    10: 'Ten',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
    1000000000000: 'Trillion',
    1000000000000000: 'Quadrillion',
    1000000000000000000: 'Quintillion',
  };

  if (typeof num !== 'number') return null;
  if (num === 0) return ToWords[0];

  var words = [];
  var place = 1;

  var I, X, C;
  do {
    I = num % 10;         
    X = num % 100 - I     
    C = num % 1000 - X - I

    if (I || X || C) {
      ToPlace[place] && words.unshift(ToPlace[place]);
    }

    if ((I || X) && num % 100 < 20) {
      words.unshift(ToWords[I + X])
    } else {
      if (I) 
        words.unshift(ToWords[I]);
      // if (I && X)
      //   words.unshift('-');
      if (X)
        words.unshift(ToWords[X]);
    }

    if (C) {
      words.unshift(ToPlace[100]);
      words.unshift(ToWords[C/100]);
    }

    num = Math.floor(num/1000);
    place *= 1000;
  } while (num >= 1);

  // Removing unneccessary spaces
  // return  words.join(" ").replace(/\ -\ /g,'-');
  return  words.join(" ");
};

console.log(numberToWords(123));
console.log(numberToWords(1234567));
console.log(numberToWords(123456));