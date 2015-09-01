/* 
 * Learn optimization from others
 */

var spiralOrder = function(matrix) {
  var ans = [];
  /* Define moving direction */
  var dirVec = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  var state = 0;

  // caching
  var m = matrix.length, n = m ? matrix[0].length : 0;
  if (!m) { return ans };

  var row = 0, col = -1;
  while(ans.length < m * n) {
    // if not out of boundary
    while(matrix[row + dirVec[state][0]] && matrix[row + dirVec[state][0]][col + dirVec[state][1]]) {
      row += dirVec[state][0];
      col += dirVec[state][1];
      ans.push(matrix[row][col]);
      matrix[row][col] = 0;
    }
    state = (state + 1) % 4;
  }  
  return ans;
}

var a = [[1, 2, 3, 4, 5], 
         [6, 7, 8, 9, 10],
         [11, 12, 13, 14, 15],
         [16, 17, 18, 19, 20],
         [21, 22, 23, 24, 25],
        ]

console.log(spiralOrder(a));