/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Time Limit Exceeded
var exist = function(board, word) {
  var w_hash = {};
  var i = 0;
  var j = 0;
  var m = board.length;
  var n = board[0].length;
  var w_l = word.length;
  if (!w_l) { return false; }

  var brd = [];
  // build word hash;
  for (i = 0; i < m; i+=1) {
    brd.push([]);
    for (j = 0; j < n; j+=1) {
      var w = board[i][j];
      w_hash[w] = w_hash[w] || [];
      w_hash[w].push({
        x: i,
        y: j
      });
      brd[i].push(0);
    }
  }

  var flag = false;
  var rec = function(x, y, idx) {
    if (x === m || y === n || x === -1 || y === -1) {
      return;
    }
    if (idx === w_l || brd[x][y]) { return; }

    if (board[x][y] === word[idx]) {
      if (idx === w_l - 1) {
        flag = true;
        return;
      }
      // visited
      brd[x][y] = 1;
      rec(x+1, y, idx + 1);
      rec(x, y+1, idx + 1);
      rec(x-1, y, idx + 1);
      rec(x, y-1, idx + 1);
      brd[x][y] = 0;
    }
  };

  var h = w_hash[word[0]];
  for (i = 0; h && i < h.length; i+=1) {
    rec(h[i].x, h[i].y, 0);
  }

  return flag;
};

var b = ["ABCE",
         "SFCS",
         "ADEE"]
var w = "ABCCED";
// var b = ["a"]
// var w = "b";
// var b = ["a"];
// var w = "a";
// var b = ["aa"];
// var w = "aaa";
// var b = ["aa"];
// var w = "aa";
// var b = ["ab",
//          "cd"];
// var w = "cdba";

// var b = ["aaa",
//          "abb",
//          "abb",
//          "bbb",
//          "bbb",
//          "aaa",
//          "bbb",
//          "abb",
//          "aab",
//          "aba"];
// var w = "aabaaaabbb";
var rtn = exist(b, w);
console.log(rtn);
