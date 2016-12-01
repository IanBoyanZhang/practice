/**
 * @param {number} n
 * @param {number} k
 * @return {number [][]}
 *
 */
// To read: Analysis iterative vs DFS approach
// http://www.sigmainfy.com/blog/leetcode-combinations.html
// How to control the iteration
// https://tenderleo.gitbooks.io/leetcode-solutions-/content/GoogleMedium/77.html
var combine = function(n, k) {
  var res = [], hash = [];
  var dfs = function(next, cons, l) {
    // base condition
    if (l === k) {
      return res.push(cons.slice());
    }

    for (var i = next; i <=n; i+=1) {
      cons.push(i);
      dfs(i + 1, cons, l+1);
      cons.pop();
    }
  };
  dfs(1, [], 0);
  return res;
};
// var rtn = combine(3, 2);
var rtn = combine(5, 5);
var rtn = combine(4, 4);
console.log(rtn);

