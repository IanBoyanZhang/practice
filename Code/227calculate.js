/**
 * @param {string} s
 * @return {number}
 */

// TODO: references:
// http://www.cnblogs.com/grandyang/p/4601208.html
// http://fisherlei.blogspot.com/2017/08/leetcode-basic-calculator-ii-solution.html

// Non recursive fast solution
// Two passes solution
var calculate = function(s) {
	var lex = [];
	var tokens = [];

	var symbolTable = {
		'*': 1,
		'/': 1,
		'+': 1,
		'-': 1,
	};

	var j = 1;
	var digits = s[0];

	for(;j < s.length; j+=1) {
		if(s[j] === ' ') continue;
		if(symbolTable[s[j]]) {
			lex.push(+digits);
			digits = '';
			lex.push(s[j]);
			continue;
		}
		digits += s[j];
	}

	lex.push(+digits);

	var i = 1;
	tokens.push(+lex[0]);
	for(;i<lex.length;i+=1) {
		if (lex[i] === '*') {
			tokens.push(+tokens.pop() * + lex[i+=1]);
			continue;
		}

		if(lex[i] === '/') {
			var last = +tokens.pop();
			if(last >= 0)
				tokens.push(Math.floor(last/+lex[i+=1]));
			else
				tokens.push(-Math.floor(Math.abs(last/lex[i+=1])));
			continue;
		}

		if(lex[i] === '+') {
			tokens.push(+lex[i+1]);
			continue;
		}

		if(lex[i] === '-') {
			tokens.push(-lex[i+1]);
			continue;
		}
	}

	return tokens.reduce(function(a, b) { return a + b; }, 0);
}
