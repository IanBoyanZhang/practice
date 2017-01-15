/**
 * @param {number [][]}  matrix
 * @param {number} target
 * @return {boolean}
 */
// TLE
var searchMatrix = function(matrix, target) {
  var WIDTH = matrix.length;
  var HEIGHT = matrix[0].length;

  var found = false;
  var recurse = function(x, y) {
    if (x >= WIDTH || y >= HEIGHT) {
      return null;
    }

    if (matrix[x][y] > target) {
      return null;
    }

    if (matrix[x][y] === target) {
      found = true;
      return null;
    }

    console.log(x, y);
    !found && recurse(x + 1, y);
    !found && recurse(x, y + 1);
  };
  
  recurse(0, 0);
  return found;
};

var arr = [
[1,   4,  7, 11, 15],
[2,   5,  8, 12, 19],
[3,   6,  9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]
];

var rtn = searchMatrix(arr, 5);
console.log(rtn);

// TODO:
// O(m + n)
var searchMatrix = function(matrix, target) {
  var WIDTH = matrix.length;
  var HEIGHT = matrix[0].length;
  var i = 0, j = HEIGHT - 1;
  while(i < WIDTH && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};

var arr = [
[1,   4,  7, 11, 15],
[2,   5,  8, 12, 19],
[3,   6,  9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]
];

var rtn = searchMatrix(arr, 5);
console.log(rtn);


