// Can only move right and down
//
// Imagine certain spots are off limits, such that the robott cannot step on them.
// TODO: Research more path finding motion planning algorithms
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
  var preBuiltSpots = [[x-2, y-2]];
  var setupBoard = function(preBuiltArr) {
    // certain grid cannot be step on
    for (var i = 0, len = preBuiltArr.length; i < len; i++) {
      var _locX = preBuiltArr[i][0], _locY = preBuiltArr[i][1];
      if (inBound(_locX, _locY)) {
        brd[_locX][_locY] = 1;
      }
    }
  };

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


  // Init board setup
  setupBoard(preBuiltSpots);
  console.log(brd);

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

console.log(RobotPath(3,3));

console.log(RobotPath(1,2));

