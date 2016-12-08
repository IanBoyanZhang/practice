/**
 * description
 * Divide and conquer
 */
// https://en.wikipedia.org/wiki/Quicksort
// Quick reference to different partition scheme
// Introduction to Algorithms
// Chapter 7 quicksort
// Works with duplicated elements
// https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
var swap = function(A, a, b) {
  var tmp = A[a];
  A[a] = A[b];
  A[b] = tmp;
};

// Scheme 1:Lomuto partition scheme
var partition = function(nums, p, r) {
  var pivot = nums[r];
  var i = p,  j = p;
  for (; j < r; j+=1) {
    if (nums[j] <= pivot) {
      swap(nums, i, j);
      i+=1;
    }
  }
  swap(nums, i, r);
  return i;
};

// Scheme2: Hoare partition scheme

var quicksort = function(nums, p, r) {
  var L = nums.length;
  if (r <= p) { return; }
  var q = partition(nums, p, r);
  quicksort(nums, p, q - 1);
  quicksort(nums, q + 1, r);
};


var a = [1, 2, 3, 4, 5, 7, 6];
var a = [3, 7, 8, 5, 2, 1, 9, 5, 4];
var a = [3, 7, 8, 5, 2, 1, 9, 5, 3];
quicksort(a, 0, a.length - 1);
console.log(a);
