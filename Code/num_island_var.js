// Second pass

// TODO: Read: https://leetcode.com/articles/number-of-islands/
// What is union find?

// var numIslands = function(grid) {
//     var recurse = function(grid, i, j) {
//         if (!grid[i] || !Number(grid[i][j]) ) { return; }
//         grid[i][j] = 0;
//         recurse(grid, i - 1, j);
//         recurse(grid, i, j - 1);

//         recurse(grid, i + 1, j);
//         recurse(grid, i, j + 1);
//     };
    
//     var counter = 0;
//     var i, j;
    
//     for (i = 0; i < grid.length; i += 1) {
//         for (j = 0; j < grid[0].length; j += 1) {
//             if (Number(grid[i][j]) === 1) {
//                 counter += 1;
//                 recurse(grid, i, j);
//             }
//         }
//     }
//     return counter;
// }

// with tracking the return number
var numIslandsWithCounter = function(grid) {
  var recurse = function(grid, i, j, cnt) {
    if (!grid[i] || !Number(grid[i][j])) { return 0; }
    grid[i][j] = 0;
    return 1 + recurse(grid, i - 1, j) + 
    recurse(grid, i, j - 1) + 
    recurse(grid, i + 1, j) +
    recurse(grid, i, j + 1);
  }

  var i, j;
  for (i = 0; i < grid.length; i += 1) {
    for (j = 0; j < grid[0].length; j += 1) {
      if (Number(grid[i][j])) {
        console.log(recurse(grid, i, j));
      }
    }
  }
  // return;
}

var grid = ["11110","11010","11000","00000"];
var grid = [[1, 1, 0, 0, 0], 
            [1, 1, 0, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 0, 1, 1]];
var rtn = numIslandsWithCounter(grid);
// console.log(rtn);

