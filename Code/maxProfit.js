/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var lowPrice = prices[0];
  var diff = 0;
  var maxDiff = diff;
  
  for (var i = 0, len = prices.length; i < len; i++) {
  	if (prices[i] < lowPrice) { lowPrice = prices[i] }
  	diff = prices[i] - lowPrice;
  	if (diff > maxDiff) {
  		maxDiff = diff;
  	}
  }

  return maxDiff;  
};

maxProfit([1000, 5000, 100, 2000]);