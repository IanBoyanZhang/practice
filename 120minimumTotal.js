/**
 * @param {number[][]} triangle
 * @return {number}
 *
 */
// TODO: Faster?
var minimumTotal = function(triangle) {
  var t = triangle;
  var m = t.length;
  var i, k;
  var c = [];
  var s = [];
  for (k = 0; k < m; k+=1) {
    c[0] = Infinity;
    for (i = 0; i <= k; i+=1) 
      c[i + 1] = k ? Math.min(t[k][i] + s[i], t[k][i] + s[i + 1]) : t[k][i];
    c[k + 2] = Infinity;
    s = c;
    c = [];
  }
  var min = s[1];
  for (i = 1; i < m + 1; i+=1)
    min = Math.min(s[i], min);
  return min;
};
var a =[[2], [3,4], [6,5,7], [4,1,8,3]];
console.log(minimumTotal(a));
var a =[[0]];
console.log(minimumTotal(a));
var a =[[-1], [-2, -3]];
console.log(minimumTotal(a));
