/**
 * @param {number} n
 * @return {number}
 *
 */
// Attempt 1 wrong answer!
var numTrees = function(n) {
    if (n === 1) {
      return 1;
    }
    var rtn_counter = 0;
    var i = 0;
    for (; i <= n - 1; i+=1) {
      if (n - i - 1) rtn_counter += numTrees(n - 1 - i);
      if (i) rtn_counter += numTrees(i);
    }
    return rtn_counter;
};

// Permutation

// http://bangbingsyb.blogspot.com/2014/11/leetcode-unique-binary-search-trees-i-ii.html
// f(0) = 1
// f(n) = f(0) f(n-1) + f(1) * f(n-2) + ... + f(n-2)* f(1) + f(n-1) * f(0)
var numTrees = function(n) {
  var numBST = [];
  numBST[0] = 1;
  var i, j;
  for (i=1; i<=n; i++) {
    numBST[i] = 0;
    for (j=0; j < i; j++) {
      numBST[i] += numBST[j]*numBST[i-1-j];
    }
  }
  console.log(numBST);
  return numBST[n];
};

var rtn = numTrees(4);
console.log(rtn);
