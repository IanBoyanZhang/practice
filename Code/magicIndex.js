// Magic index in an Array A[0 .. n-1] is defined to be an index such that A[i]
// Given a sorted array of distinct integers, write a method to find a magic index,
// if one exists, in array A.
// @arr is sorted integers
// What if the values are not distinct?

// Linear time complexity
var magicSlow = function(arr) {
  var rtnIdx = [];
  for (var i = 0, len = arr.length; i < len; i++) {
//    if (arr[i] > i) break;                // don't use if duplicated present
    if (arr[i] === i) rtnIdx.push(arr[i]);
  }
  return rtnIdx.length ? rtnIdx : [];
};
