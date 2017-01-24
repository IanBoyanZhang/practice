/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  function size(arr) {
    return [arr.length, arr[0].length];
  }
  var i, j, k;
  [A.height, A.width] = size(A);
  [B.height, B.width] = size(B);

  var C = [];
  for (i = 0; i < A.height; i+=1) {
    C.push([]);
  }

  var temp;
  var a_map = [], b_map = [];
  for (i = 0; i < B.width; i+=1) {
    temp = 0;
    for(j = 0; j < B.height; j+=1) {
      temp += A[0][j] * B[j][i];

      b_map[i] = b_map[i] || [];
      if (B[j][i])
        b_map[i].push(j);
    }
    C[0][i] = temp;
  }

  var idx;
  for (k = 1; k < A.height; k+=1) {
    for (i = 0; i < B.width; i+=1) {
      temp = 0;
      for (j = 0; j < b_map[i].length; j+=1) {
        idx = b_map[i][j];
        temp += A[k][idx] * B[idx][i];
      }
      C[k][i] = temp;
    }
  }
  return C;
};

// How to improve
