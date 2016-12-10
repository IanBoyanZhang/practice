var shell_sort = function(arr) {
  var len = arr.length;
  for (var h =len; h = parseInt(h/2);) {
    for (var i = h; i < len; i+=1) {
      var k = arr[i];
      for (var j = i; j>=h && arr[j-h] > k; j -= h) {
        arr[j] = arr[j-h];
      }
    }
  }
  return arr;
};

var arr = [10, 14, 73, 25, 23, 13, 27, 94, 33, 39, 25, 59, 94, 65, 82, 45];
var rtn = shell_sort(arr);
console.log(rtn);
