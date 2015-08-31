/*
 * Slower implementation
 */

var spiralOrder = function(matrix) {
  var ans = [];
  if (matrix.length === 0) { return ans };
  var num_row = matrix.length, num_col = num_row > 0 ? matrix[0].length : 0;
  // var num_row
  var col_start = 0;
  var row_start = 0;
  // while (num_row > 0 && num_col > 0) {
  while (ans.length !== matrix.length * matrix[0].length) {
    for (var i = 0; i < num_col; i++) {
      ans.push(matrix[row_start][col_start + i]);
    };
    for (i = 1; i < num_row; i++) {
      ans.push(matrix[row_start + i][col_start + num_col - 1]);
    };
    for (i = num_col - 2; i >= 0 && num_row > 1; i--) {
      ans.push(matrix[row_start + num_row - 1][col_start + i]);
    };
    for (i = num_row - 2; i >= 1 && num_col > 1; i--) {
      ans.push(matrix[row_start + i][col_start]);
    };

    num_col -= 2;
    num_row -= 2;
    row_start++;
    col_start++;
  }
  return ans;
}