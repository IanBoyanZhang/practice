/**
 * Explore solution to original Knight's tour problem
 * if every point on board could be touched only once
 * @param boardSize {n, m}
 * @return {Array []} Possible solution tracking
 */
var knightTour = function(n, m) {
  m = m || n;

  var UL = function(x, y) {
    return [x-=1, y-=2];
  };
  var UR = function(x, y) {
    return [x+=1, y-=2];
  };
  var DL = function(x, y) {
    return [x-=1, y+=2];
  };
  var DR = function(x, y) {
    return [x+=1, y+=2];
  };
  var LU = function(x, y) {
    return [x-=2, y-=1];
  };
  var LD = function(x, y) {
    return [x-=2, y+=1];
  };
  var RU = function(x, y) {
    return [x+=2, y-=1];
  };
  var RD = function(x, y) {
    return [x+=2, y+=1];
  };
  var moves = [UL, UR, DL, DR, LU, LD, RU, RD];
  
  // board representation
  var makeBoard = function(dimX, dimY) {
    dimY = dimY || dimX;
    var brd = [];
    for (var i = 0; i < dimX; i+=1) {
      brd.push([]);
      for (var j = 0; j < dimY; j+=1) {
        brd[i][j] = 0;
      }
    }
    return brd;
  };

  // return true or false
  var checkMove = function(x, y) {
    // out of bound
    if (x < 0 || x >= n) return false;
    if (y < 0 || y >= m) return false;
    // visited
    if (board[x][y]) return false;
    return true;
  };

  var board = makeBoard(n, m);

  // For back tracking 
  var resultArr = [];
  var resultCounter = 0;
  var recurse = function(x, y, count) {
//    console.log("x: ", x, "y: ", y, "count", count);
    // base condition
    if (count === n * m) {
      resultCounter+=1;
      return;
    }

    var mvbd, nX, nY;
    // if there is available move make the move
    for (var i = 0, mLen = moves.length; i < mLen; i+=1) {
      // place the knight first
      mvbd = moves[i](x, y);
      nX = mvbd[0]; nY = mvbd[1];
      // check move if not continue;
      if (!checkMove(nX, nY)) {
        continue;
      }
      board[nX][nY] = 1;
      recurse(nX, nY, count+1);
      // remove the knight before quit
      board[nX][nY] = 0;
    }
  };

  for (var row = 0; row < n; row+=1) {
    for (var col = 0; col < m; col+=1) {
//      console.log(row + " " + col);
      board[row][col] = 1;
      recurse(row, col, 1);
      board[row][col] = 0;
    }
  }
  return resultCounter;
};

// console.log(knightTour(5));
console.log(knightTour(4));
console.log(knightTour(5));
