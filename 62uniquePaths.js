/**
 * @param {number} n
 * @param {number} n
 * @return {number}
 *
 */

// Robot can only move right or down
// First attempt, Result correct, time limit exceeded
var uniquePaths = function(m, n) {
  var cnt = 0;
  var dfs = function(x, y) {
    if (x === n && y === m) cnt+=1;
    if (x > n || y > m) return null;
    bfs(x + 1, y);
    bfs(x, y + 1);
  };

  dfs(1, 1);
  return cnt;
};

// second attempt
// Still exceed time limit 
var uniquePaths = function(m, n) {
  // bfs
  var s = [];
  var x = 1;
  var y = 1;
  var cnt = 0;
  var pos = [];
  s.push([x, y]);
  while(s.length) {
    pos = s.pop();
    // check base
    x = pos[0];
    y = pos[1];
    if (x + 1 <= n) {
      s.push([x+1, y]);
    }
    if (y + 1 <= m) {
      s.push([x, y + 1]);
    }
    if (x === n && y === m) {
      cnt += 1;
    }
  }
  return cnt;
};

// simplified recursion
var uniquePaths = function(m, n) {
  if (m < 1 || n < 1) return 0;
  if (m === 1 && n === 1) return 1;
  return uniquePaths(m - 1, n) + uniquePaths(m, n-1);
};

// console.log(uniquePaths(1, 2));
// console.log(uniquePaths(2, 3));
// console.log(uniquePaths(3, 3));

// Thought: DP
// Reuse arithmatic inspection
// Utilize symmetric architecturec
// Without swap
// Solution: right down grid
var uniquePaths = function(m, n) {
  var c = [];
  for (var i = 0; i < m; i+=1) {
    c.push([]);
    c[i][0] = 1;
  }
  for (var j = 0; j < n; j+=1) {
    c[0][j] = 1;
  }
  for (i = 1; i < m; i+=1) {
    for (j = 1; j < n; j += 1) {
      c[i][j] = c[i][j - 1] + c[i-1][j];
    }
  }
  return c[m-1][n-1];
};

console.log(uniquePaths(4, 3));
console.log(uniquePaths(2, 4));
console.log(uniquePaths(1, 1));
console.log(uniquePaths(4, 4));
// Now O(1) algo
