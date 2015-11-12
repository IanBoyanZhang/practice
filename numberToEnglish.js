/**
 * Number To Words
 * @param {number} num description
 * @return {string} 
 */

// Dividing number
var numberToWords = function(num) {
  if (num === 0) return "Zero";

  var digits = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  var teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", ""];
  var places = ["Hundred", "Thousand", "Million", "Billion", "Trillion", "Quadrillion"];

  function processor(num) {
    var I, X, H;
    var toPlace = 0;
    var words = [];       // words = "";
    do {
      // Separate single digits ->
      I = num%10;
      X = num%100 - I;
      C = num%1000 - X - I;
      
      // Leading word
      if ((I || X || C) && toPlace > 0) words.unshift(places[toPlace]); 
      // teens;
      if (X && num % 100 < 20) words.unshift(teens[I]);
      // digits
      else if (I && num % 100 < 10) words.unshift(digits[I]);
      // tens-digits combination
      else {
        if (I) words.unshift(digits[I]);
        if (X) words.unshift(tens[Math.floor(X/10)]);
      }

      if (C) {
        words.unshift(places[0]);
        words.unshift(digits[Math.floor(C/100)]);
      }
      toPlace++;
      num = Math.floor(num/1000);
    }while(num >= 1);
    return words.join(" ");
  }
  return processor(num);
};
