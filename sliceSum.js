/**
 * Arr
 *
 */
var sliceSum = function(arr, k) {
  var c_sum = 0;
  var count = 0;
  var sum = {};
  sum[k] = 1;
  for (var i = 0, len = arr.length; i < len; i+=1)  {
    c_sum += arr[i];
    if (sum[c_sum + k] === undefined ) sum[c_sum + k] = 0;
    count += sum[c_sum] || 0;
    sum[c_sum + k]+=1;
  }

  return count;
};

var array = [1, 1, 1, 3, 7, -4];
k = 3;

var rtn = sliceSum(array, k);
console.log(rtn);
