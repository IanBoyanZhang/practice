/* 
 * callback implementation is faster than implemenation using eval()
 * Use !== in while condition is faster than <
 * Array length caching seems didn't produce performance difference on Leetcode platform
 * Potential reason: the engine is optimized for this type of caching
 */

var spiral = function(matrix) {
    var array = matrix;
  var arr = [];
  if (matrix.length === 0) { return arr }
  var arrTag = [];
  // var dirState = ['r', 'd', 'l', 'u'];
  for (var i = 0; i < array.length; i++) {
    arrTag.push([]);
  }
  
  var m = matrix.length;
  var n = matrix[0].length;

  var row = 0, col = -1;

  var tagElement = function(row, col) {
    arrTag[row][col] = 1;
  }

  var checkBoundary = function(row, col) {
    return arrTag[row] !== undefined && arrTag[row][col] !== 1 && array[row][col] !== undefined;
  }

  var stateAction = function(callback, rev) {
    callback();
    while (checkBoundary(row, col)) {
      // console.log(row + " " + col);
      tagElement(row, col);
      arr.push(array[row][col]);
      callback();
    }
    rev();
  }

  // checkLength
  var dir = 0;
  while(arr.length !== m * n) {
    // dir = move(dir);
    if (dir === 0) {
      stateAction(function() { col += 1 }, function() { col -= 1 })
      dir+=1;
    }

    if (dir === 1) {
      stateAction(function() { row += 1 }, function() { row -= 1 });
      dir+=1;
    }

    if (dir === 2) {
      stateAction(function() { col -= 1 }, function() { col += 1 });
      dir+=1;
    }

    if (dir === 3) {
      stateAction(function() { row -= 1 }, function() { row += 1 });
      dir=0;
    }
  }

  return arr;
}

// 1 2 3 4 5      10 15 20 25 24      23 22 21 16 11     6 7 8 9 14     19 18 17 12 13 
var a = [[1, 2, 3, 4, 5], 
         [6, 7, 8, 9, 10],
         [11, 12, 13, 14, 15],
         [16, 17, 18, 19, 20],
         [21, 22, 23, 24, 25],
        ]

console.log(spiral(a));