/**
 * @param {number} num
 * @return {string}
 * Using array as hashing container
 */

 var numberToWords = function(num) {
  // var single = ['Zero','One','Two','Three','Four','Five','Six', 'Seven', 'Eight', 'Nine'];
  // var teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  // var tens = [ ' ', ' ', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  // var ToPlace = [' ', 'Ten', 'Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'];

  var single = ['zero','one','two','three','four','five','six', 'seven', 'eight', 'nine'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  var tens = [ ' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var ToPlace = [' ', 'ten', 'hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

  if (typeof num !== 'number') return null;
  if (num === 0) return single[0];

  // Queue
  var words = [];
  // var place = 1;
  var place = 2;

  var I, X, C;
  do {
    I = num % 10;
    X = num % 100 - I;
    C = num % 1000 - X - I;

    if ((I || X || C) && place > 2)
      ToPlace[place] && words.unshift(ToPlace[place]);
    if (X && num % 100 < 20)
      words.unshift(teens[I + X - 10]);
    else if (I && num % 100 < 10) 
      words.unshift(single[I]);
    else { 
      if (I) 
        words.unshift(single[I]);
      if (I && X) 
        words.unshift('-');
      if (X)
        words.unshift(tens[Math.floor(X/10)]);
    }

    if (C) {
      words.unshift(ToPlace[2]);
      words.unshift(single[C/100]);
    }

    num = Math.floor(num/1000);
    place += 1;
  } while(num >= 1)
  // Removing unneccessary spaces
  return  words.join(" ").replace(/\ -\ /g,'-');
  // return words.join(" ");
};

// console.log(numberToWords(123));
// console.log(numberToWords(12345));
// console.log(numberToWords(1234967));
// console.log(numberToWords(100));
console.log(numberToWords(50));