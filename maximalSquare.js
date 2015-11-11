/*  
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // Starting square
  for (row=0, rowLen=matrix.length; row < rowLen; row++) {
     for (var col=0, colLen=matrix[0].length; col < colLen; col++) {
     }
  }
};

// Possible binary solution
// Assume Square
// TODO: refactor to use incremental calculation to get square area
// keep tracking current index for next tile calculation
var expandSearch = function(startRC, endRC, matrix) {
  'use strict';
  for (var i = startRC+1; i < endRC; i++) {
    if(!isBlock(startRC, startRC, i, i, matrix)) {
      // break out the loop
      return calcArea(startRC, startRC, endRC, endRC);
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
