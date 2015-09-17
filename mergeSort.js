// Merge Sort Top Down implementation using lists
var mergeSort = function mergeSort(array) {
  if (array.length < 2) { return array }

  var mid = Math.floor(array.length/2);
  var subLeft = mergeSort(array.slice(0, mid));
  var subRight = mergeSort(array.slice(mid));

  return merge(subLeft, subRight);
};

var merge = function merge(left, right) {
  var merged = [];
  while (left.length > 0 && right.length > 0) {
  	merged.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return merged.concat(left.length? left : right);
}

var test = [1, 23, 4, 53, 3, 4, 9, 11, 92, 0, -11, -2, -3];
console.log(mergeSort(test));