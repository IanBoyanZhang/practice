/**
 * description
 * Kadane's Algo
 */
var max_subArray = function(A) {
  var i = 0, len = A.length;
  var max = A[i];
  var p_sum = A[i];
  for (;i<len;i+=1) {
    p_sum = Math.max(A[i], A[i] + p_sum);
    max = Math.max(p_sum, max);
  }
  return max;
};

var arr = [3, 6, 200, -2, -88, 12];
var rtn = max_subArray(arr);
console.log(rtn);


var max_subArray = function(A) {
  var i = 0, len = A.length;
  var max = A[i];
  var p_sum = A[i];

  for (; i<len; i+=1) {
//    p_sum = Math.max(A[i], A[i] + p_sum);
    if (p_sum + A[i] > A[i]) {
      p_sum += A[i];
    } else {
      p_sum = A[i];
    }
    if (p_sum > max) {
      max = p_sum;
    }
  }
  return max;
};

var arr = [3, 6, 200, -2, -88, 12];
var rtn = max_subArray(arr);
console.log(rtn);


