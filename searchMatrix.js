/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * 1. Integers in each row are sorted in ascending from left to right
 * 2. The first integer of each row is greater than the last integer of the previous row
 * @param {number[][]} matrix N/A
 * @param {number} target N/A
 * @return {boolean} 
 */

// Using function calls for clear program expression, not for performance consideration
var searchMatrix = function(matrix, target) {
  'use strict';
  if (!matrix.length || target === undefined) return false;
  var rowLen = matrix.length, colLen = matrix[0].length;
  var getCurrNum = function(bound, row) {
    if (row !== undefined) return matrix[row][bound];
    return matrix[bound][0];
  };
  var halfBound = function(low, high) {
    return Math.floor((high + low)/2);
  };
  // Vertically
  var binaryArrSearch = function(low, high, row) {
    var currNum, newBound;
    if (target === getCurrNum(high, row)) return true;
    if (target > getCurrNum(high, row)) return high;

    while(low < high) {
      newBound = halfBound(low, high);
      currNum = getCurrNum(newBound, row);
      if (currNum === target) return true;
      if (currNum < target) low = newBound + 1;  // For escaping the difference
      else high = newBound;
    }
    return Math.max(low - 1, 0);                 // For less than zero situation
  };
  var rtnVal = binaryArrSearch(0, rowLen - 1);
  if (typeof rtnVal === 'boolean') return rtnVal;

  rtnVal = binaryArrSearch(0, colLen - 1, rtnVal);
  return typeof rtnVal === 'boolean' ? rtnVal : false;
};

// Test it 
var genMatrix = function(m, n) {
  var counter = 0, mat = [];
  for (var i = 0; i < m; i++) {
    mat.push([]);
    for (var j = 0; j < n; j++) {
      if (counter === 5) { mat[i].push(4); counter++;}
      else mat[i].push(++counter);
    }
  }
  return mat;
};

var mat = genMatrix(5, 5);
console.log(mat);

console.log("4" + searchMatrix(mat, 4));
console.log("-1 " + searchMatrix(mat, -1));
console.log("0" + searchMatrix(mat, 0));
console.log("1" + searchMatrix(mat, 1));
console.log("21" + searchMatrix(mat, 21));
console.log("29" + searchMatrix(mat, 29));
console.log("15" + searchMatrix(mat, 15));
console.log("14" + searchMatrix(mat, 14));
console.log("22 " + searchMatrix(mat, 22));
console.log("10  " + searchMatrix(mat, 10));
