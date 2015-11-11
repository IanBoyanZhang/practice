/*
 * @param {character[][]} matrix
 * @return {number}
 */

// TODO: Test case --> [], ["01"], ["0"]
var maximalSquare = function(matrix) {
  'use strict';
  if (matrix.length === 0) return 0;
  var rowLen = matrix.length;
  var colLen = matrix[0].length;
  // parseInputArray

  var maxArea = 0;
  for (var i = 0; i < rowLen; i++) {
    for (var j = 0; j < colLen; j++) {
      // Keep tracking all possiblities then 
      maxArea = maxArea || matrix[i][j];
      maxArea = Math.max(expandSearch(i, j, rowLen, colLen, matrix), maxArea);
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
  var rtnArea = 0;
  for (var offset = 1; offset + sr < er; offset++) {
    if(!isBlock(sr, sc, sr + offset, sc + offset, matrix)) {
      // break out the loop
      return rtnArea;
    }
    rtnArea = calcArea(sr, sc, sr + offset, sc + offset);
  }
  return rtnArea;
};

// Check if the searching area is valid
var isBlock = function(sr, sc, er, ec, matrix) {
  'use strict';

  var sum = 0, area = calcArea(sr, sc, er, ec);
  for (var i = sr; i <= er; i++) {
    for (var j = sc; j <= ec; j++) {
      sum += parseInt(matrix[i][j]);
    }
  }
  // console.log("sr: " + sr + "sc: " + sc + "er: " + er + "ec: " + ec + "sum: " + sum + "Area: " + area);
  // if (sum === area && sum === 9) console.log("found!");
  return sum === area;

};

var calcArea = function(sr, sc, er, ec) {
  return (er - sr + 1) * (ec - sc + 1);
};


// Test it
var genMatrix = function(m, n, isStr) {
  var mat = [];
  var toN = 1;
  for (var i = 0; i < m; i++) {
    mat[i] = isStr ? [""] : [];
    for (var j = 0; j < n; j++) {
      if (isStr)
        mat[i] += Math.floor(Math.random() * (1 + toN));
      else
        mat[i].push(Math.floor(Math.random() * (1 + toN)));
    }
  }
  return mat;
};

var genFixMat = function(m, n) {
  var mat = [], storeArr = [2, 3, 4, 5, 6];
  for (var i = 0; i < m; i++) {
    mat.push([]);
    for (var j = 0; j < n; j++) {
      mat[i][j] = storeArr.indexOf(i+j) > -1 ? 1 : 0;
    }
  }
  return mat;
};

var mat = genMatrix(5, 5);
//console.log(mat);
//console.log("result:" + maximalSquare(mat));

//console.log(mat = genFixMat(5, 5));
// var mat = genMatrix(1, 1);
// console.log(mat = [[1, 1],[1, 1]]);
console.log(mat = ["11","11"]);
console.log("result:" + maximalSquare(mat));


