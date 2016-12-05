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
         "ADEE"];
var w = "ABCCED";
var b = ["a"];
var w = "b";
var b = ["a"];
var w = "a";
var b = ["aa"];
var w = "aaa";
var b = ["aa"];
var w = "aa";
var b = ["ab",
         "cd"];
var w = "cdba";

var b = ["aaa",
         "abb",
         "abb",
         "bbb",
         "bbb",
         "aaa",
         "bbb",
         "abb",
         "aab",
         "aba"];
var w = "aabaaaabbb";
var rtn = exist(b, w);
console.log(rtn);

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

  var f;
  var hash;
  var r;
  var c;

  // reset hash array
  function clear() {
    hash = [];
    for (var i = 0; i < r; i++)
      hash[i] = [];
  }

  function dfs(x, y, word, index, board) {
    if (index > wl) return;
    if (f)
      return;

    if (index === word.length) {
      f = true;
      return;
    }

    var dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (var i = 0; i < 4; i++) {
      var _x = x + dir[i][0];
      var _y = y + dir[i][1];
      if (_x < 0 || _x >= r || _y < 0 || _y >=c)
        continue;
      var item = board[_x][_y];
      if (hash[_x][_y] || item !== word[index])
        continue;
      hash[_x][_y] = true;
      // Once find, trim other branches
      f || dfs(_x, _y, word, index + 1, board);
      hash[_x][_y] = false;
    }
  }

  var wl = word.length;
  if (wl === 0) return true;

  r = board.length;
  if (!r) return false;
  c = board[0].length;

  clear();
  f = false;
  for (var i = 0; i < r; i++)
    for (var j = 0; j < c; j++) {
      var item = board[i][j];
      if (item !== word[0])
        continue;
      hash[i][j] = true;
      dfs(i, j, word, 1, board);
      hash[i][j] = false;
      if (f)
        return true;
    }

  return false;
};
