/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

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
    dfs(x-1, y);
    dfs(x, y-1);
    brd[x+1][y+1] = 0;
  };
  dfs(0, 0);
  return cnt;
};

var r = uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
// var r = uniquePathsWithObstacles([[0]]);
console.log(r);
