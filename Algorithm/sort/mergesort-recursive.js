// Stability of sorting algo
// http://courses.csail.mit.edu/6.006/fall11/rec/rec07.pdf
var mergeSort = function mergeSort(array) {
  if (array.length < 2) { return array }

  var mid = Math.floor(array.length/2);
  var subLeft = mergeSort(array.slice(0, mid));
  var subRight = mergeSort(array.slice(mid));

  return merge(subLeft, subRight);
};

var merge = function(left, right) {
  var merged = [], i = 0; j = 0;
  while(i < left.length && j < right.length) {
    merged.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
};

// var merge = function merge(left, right) {
//   var merged = [],
//       il = 0,
//       ir = 0;
//   while(ir < right.length && il < left.length) {
//     // Unstable implementation
//     // if (left[il] < right[ir]) {
//     // Stable implementation
//     if (left[il] <= right[ir]) {
//       merged.push(left[il]);
//       il+=1;
//     } else {
//       merged.push(right[ir]);
//       ir+=1;
//     }
//   }
//   return merged.concat(left.slice(il)).concat(right.slice(ir));
// };

var test = [1, 23, 4, 53, 3, 4, 9, 11, 92, 0, -11, -2, -3];
// var test = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(mergeSort(test));
