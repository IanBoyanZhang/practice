/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var highPrice = prices[0], lowPrice = prices[0];
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