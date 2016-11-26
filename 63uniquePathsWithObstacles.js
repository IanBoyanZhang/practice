/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// Time limitied exceeded
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  var brd = [];
  // build the wall lol
  for (var i = 0; i < m+2; i+=1) {
    brd.push([]);
    brd[i][0] = 1;
    brd[i][n+1] = 1;
  }
  for (i = 0; i < n + 2; i+=1) {
    brd[0][i] = 1;
    brd[m+1][i] = 1;
  }

  var cnt = 0;
  var dfs = function(x, y) {
    if (brd[x+1][y+1] || obstacleGrid[x][y]) return;
    if (x === m - 1 && y === n - 1) return cnt+=1;
    brd[x+1][y+1] = 1;
    dfs(x, y+1);
    dfs(x+1, y);
    brd[x+1][y+1] = 0;
  };
  dfs(0, 0);
  return cnt;
};
// var r = uniquePathsWithObstacles([[0]]);
// console.log(r);
var uniquePathsWithObstacles = function(obstacleGrid) {
  var o = obstacleGrid;
  var m = o.length;
  var n = o[0].length;

  var c = [];
  var v = 1;
  // if there is one obstacle on path
  // All future single tack path will be blocked
  for (var i = 0; i < m; i+=1) {
    c.push([]);
    if (obstacleGrid[i][0]) { c[i][0] = 0; v = 0; }
    else c[i][0] = v;
  }
  v = 1;
  for (var j = 0; j < n; j+=1) {
    if (obstacleGrid[0][j]) { c[0][j] = 0; v = 0; }
    else c[0][j] = v;
  }
  for (i = 1; i < m; i+=1) {
    for (j = 1; j < n; j+=1) {
      if (obstacleGrid[i][j]) c[i][j] = 0;
      else c[i][j] = c[i][j - 1] + c[i-1][j];
    }
  }
  return c[m-1][n-1];
};
var r = uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
console.log(r);
// TODO: O(1)?
