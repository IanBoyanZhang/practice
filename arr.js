var spiral = function(array) {
  var arr = [];
  var arrTag = [];
  // var dirState = ['r', 'd', 'l', 'u'];
  for (var i = 0; i < array.length; i++) {
    arrTag.push([]);
  }

  var row = 0, col = -1;

  var tagElement = function(row, col) {
    arrTag[row][col] = 1;
  }

  var checkBoundary = function(row, col) {
    return arrTag[row] !== undefined && arrTag[row][col] !== 1 && array[row][col] !== undefined;
  }

  var stateAction = function(update, rev) {
    // callback();
    eval(update);
    while (checkBoundary(row, col)) {
      // console.log(row + " " + col);
      tagElement(row, col);
      arr.push(array[row][col]);
      // callback();
      eval(update)
    }
    // rev();
    eval(rev)
  }

  // transition between states
  var move = function(dir) {
    if (dir === 0) {
      stateAction("col += 1", "col -= 1");
      return dir+1;
    }

    if (dir === 1) {
      stateAction("row += 1", "row -= 1");
      return dir+1;
    }

    if (dir === 2) {
      stateAction("col -= 1", "col += 1");
      return dir+1;
    }

    if (dir === 3) {
      stateAction("row -= 1", "row += 1");
      return 0;
    }
  }

  // checkLength
  var dir = move(0);
  while(arr.length !== array.length * array[0].length) {
    dir = move(dir);
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