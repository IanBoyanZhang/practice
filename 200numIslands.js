/**
 * @param {character[][]} grid
 * @return {number}
 *
 */

var numIslands = function(grid) {
  var row = grid.length;
//  var col = grid[0].length;
  var col = (grid[0] || []).length;
  var i, j;

  var visited = [];
  for (i = 0; i < row; i += 1) {
    visited.push([]);
    for (j = 0; j < col; j += 1) {
      visited[i][j] = 0;
    }
  }

  var res = 0;
  var walker = function(x, y) {
    if (x < 0 || x >= row || y >= col || y < 0) { return 0; }
    if (grid[x][y] === '0') return 0;
    if (visited[x][y]) return 0;

    visited[x][y] = 1;
    walker(x + 1, y);
    walker(x - 1, y);
    walker(x, y + 1);
    walker(x, y - 1);
    return 1;
  };

  for (i = 0; i < row; i+=1) {
    for (j = 0; j < col; j+= 1) {
      if (!visited[i][j] && grid[i][j] === '1') {
        res += walker(i, j);
      }
    }
  }
  return res;
};

var grid = ["11110","11010","11000","00000"];
var grid = ["11000", "11000" ,"00100" , "00011"];
var rtn = numIslands(grid);
console.log(rtn);
