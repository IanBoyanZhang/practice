/*  
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // Starting square
  var rowLen = matrix.length;
  var colLen = matrix[0].length;
  var maxArea = 0;
  for (var i = 0; i < rowLen; i++) {
    for (var j = 0; j < colLen; j++) {
      // Keep tracking all possiblities then 
      maxArea = Math.math(expandSearch(i, j, rowLen, colLen, matrix), maxArea);
    }
  }
  return maxArea;
};

// Possible binary solution
// Assume targeting Square subArray
// TODO: refactor to use incremental calculation to get square area
// keep tracking current index for next tile calculation
var expandSearch = function(sr, sc, er, ec, matrix) {
  'use strict';
  for (var i = sr+1; i < er; i++) {
    for (var j = sc+1; j < ec; j++) {
      if(!isBlock(sr, sc, i, j, matrix)) {
        // break out the loop
        return calcArea(sr, sc, i, j);
      }
    }
  }
};

// Check if the searching area is valid
var isBlock = function(sr, sc, er, ec, matrix) {
  'use strict';
  var sum = 0, area = calcArea(sr, sc, er, ec);
    for (var i = sr; i < er; i++) {
      for (var j = sc; j < ec; j++) {
        sum += matrix[i][j];
      }
    }
  return sum === area;
};

var calcArea = function(sr, sc, er, ec) {
  return (er - sr) * (ec - sc);
};
