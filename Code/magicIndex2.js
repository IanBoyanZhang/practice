// Magic index in an Array A[0 .. n-1] is defined to be an index such that A[i]
// Given a sorted array of distinct integers, write a method to find a magic index,
// if one exists, in array A.
// @arr is sorted integers
// What if the values are not distinct?

// Binary search
// TODO: recursion
var magicFast = function(arr, start, end, idx) {
  if (end < 0 || start >= arr.length || end < start) { return -1; }
  start = start || 0;
  end = end || arr.length - 1;
  idx = idx || Math.floor((start + end)/2);

  if (idx === arr[i]) { return idx; } else 
  if (iter < arr[iter]) { return magicFast(arr, start, idx); } else// go left
  if (iter > arr[iter]) { return magicFast(arr, idx, end); }
  return -1;
};

magicFast(arr, 0, arr.length - 1);
