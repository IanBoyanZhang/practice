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

// Second pass

// TODO: Read: https://leetcode.com/articles/number-of-islands/
// What is union find?

var numIslands = function(grid) {
    var recurse = function(grid, i, j) {
        if (!grid[i] || !Number(grid[i][j]) ) { return; }
        grid[i][j] = 0;
        recurse(grid, i - 1, j);
        recurse(grid, i, j - 1);

        recurse(grid, i + 1, j);
        recurse(grid, i, j + 1);
    };
    
    var counter = 0;
    var i, j;
    
    for (i = 0; i < grid.length; i += 1) {
        for (j = 0; j < grid[0].length; j += 1) {
            if (Number(grid[i][j]) === 1) {
                counter += 1;
                recurse(grid, i, j);
            }
        }
    }
    return counter;
}
