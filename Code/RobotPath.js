// Can only move right and down
var RobotPath = function(x, y) {
  'use strict';
  /*
   * @input: dir: 0 -> right
   * 1 -> down
   */

  var Paths = [];
  var counter = 0;
  // Make 2D board
  var makeEmptyBoard = function() {
    var board = [];
    for (var i = 0; i <= x; i++) {
      board.push([]);
      for (var j = 0; j <= y; j++) {
        board[i].push(0);
      }
    }
    return board;
  };

  var brd = makeEmptyBoard();

  // T/F
  var isNewPath = function(locX, locY) {
    return brd[locX][locY] === 0;
  };

  var inBound = function(locX, locY) {
    return locX <= x && locX >= 0 && locY <= y && locY >= 0;
  };

  var placable = function(locX, locY) {
    return inBound(locX, locY) && isNewPath(locX, locY);
  };

  var onTarget = function(locX, locY) {
    return locX == x && locY == y;
  };

  var move = function(startX, startY, dir) {
    var dirVec = [[1, 0], [0, 1]];
    return [startX + dirVec[dir][0], startY + dirVec[dir][1]];
  };

  // build decision tree

  var step = function(currX, currY, path) {
    if (onTarget(currX, currY)) {
      path++;
      counter++;
      Paths.push(path);
      return;
    }

    // start the recursion
    var newX = move(currX, currY, 0)[0];
    var newY = move(currX, currY, 0)[1];
    
    if (placable(newX, newY)) {
      brd[newX][newY] = 1;
      step(newX, newY, path);
      brd[newX][newY] = 0;
    }

    newX = move(currX, currY, 1)[0];
    newY = move(currX, currY, 1)[1];
    if (placable(newX, newY)) {
      brd[newX][newY] = 1;
      step(newX, newY, path);
      brd[newX][newY] = 0;
    }

    // iterate through two direction
    // left or right
  };

  step(0, 0, 0);

  return counter;
};

console.log(RobotPath(2,2));

