/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// You can buy and sell in same day
	// Transaction as many time as you want but you must sell the stock before you buy again

	// Greedy
	var profit = 0;
	var diff = 0;
	for (var i = 1, len = prices.length; i < len; i++) {
		diff = prices[i] - prices[i - 1];
		profit += diff > 0? diff : 0;
	}
	return profit;
};