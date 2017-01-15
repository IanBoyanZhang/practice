/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(n) memory usage
// http://blog.csdn.net/happyaaaaaaaaaaa/article/details/51546526
var minPathSum = function(grid) {
  var m = grid.length;
  var n = grid[0].length;
  // cost matrix
  var c = [];
  c.length = m;
  c[0] = grid[0][0];
  console.log(c);
  for (var i = 1; i < m; i+=1) c[i] = grid[i][0] + c[i-1];
  for( var j = 1; j < n; j+=1) 
    for (i = 0; i < m; i+=1)
      c[i] = (i === 0 ? c[i] : Math.min(c[i], c[i - 1])) + grid[i][j];
  return c[m-1];
};
// minPathSum([[0, 1], [1, 0]]);
console.log(minPathSum([[0]]));
