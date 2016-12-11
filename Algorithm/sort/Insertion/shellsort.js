// Shell sort is not stable
var shell_sort = function(arr) {
  var len = arr.length;
//  for (var h = len; h = parseInt(h/2);) {
  var h = parseInt(len/2);
  while (h >= 1) {
    for (var i = h; i < len; i+=1) {
      var k = arr[i];
      for (var j = i; j>=h && k < arr[j-h]; j -= h) {
        arr[j] = arr[j-h];
      }
      arr[j] = k;
    }
    h = parseInt(h/2);
  }
  return arr;
};

var shell_sort = function(arr) {
  var len = arr.length;
  for (var h = parseInt(len/2);h>=1; h = parseInt(h/2)) {
    for (var i = h; i < len; i+=1) {
      var k = arr[i];
      for (var j = i; j >=h && k < arr[j-h]; j -= h) {
        arr[j] = arr[j-h];
      }
      arr[j] = k;
    }
  }
  return arr;
};

var arr = [10, 14, 73, 25, 23, 13, 27, 94, 33, 39, 25, 59, 94, 65, 82, 45];
// var arr = [6, 5, 3, 1, 8, 7, 2, 4];
var rtn = shell_sort(arr);
console.log(rtn);
