// TODO: 
// Bottom up and top down
// Comparison with other sorts
var heapsort = function(arr) {
  var swap = function(i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  var max_heapify = function(start, end) {
    var dad = start;
    var son = dad * 2 + 1;
    if (son >= end) return;
    if (son < end - 1 && arr[son] < arr[son + 1])
      son+=1;
    if (arr[dad] <= arr[son]) {
      swap(dad, son);
      max_heapify(son, end);
    }
  };
  
  var len = arr.length;
  for (var i = Math.floor(len/2) - 1; i >= 0; i-=1) {
    max_heapify(i, len);
  }
  for (var i = len - 1; i > 0; i-=1) {
    swap(0, i);
    max_heapify(0, i);
  }
  return arr;
};

var a = [3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7, 4, 0, 2, 6];
var a = [6, 2, 3, 5, 4, 1, 7];
console.log(heapsort(a));


// Top down
var heap_sort = function(arr) {
  var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  var max_heapify = function(arr, start, end) {
    var root = start;
    var child = 2 * root + 1;
    while(arr[root] <= arr[child] && child < end) {
      // get the larger child
      if (child <= end - 1 && arr[child] < arr[child + 1]) {
        child += 1;
      }
      // Larger child node becomes root node
      if (arr[child] > arr[root]) {
        swap(arr, child, root);
        root = child;
      }
      child = 2 * root + 1;
    }
  };

  // step 1 build the heap
  var i, len = arr.length;
  // From the last root/parent node
  for (i = Math.floor(len/2) - 1; i >=0; i-=1) {
    max_heapify(arr, i, len - 1);
  }
  // Heap sort
  for (i = len - 1; i > 0; i-=1) {
    swap(arr, 0, i);
    max_heapify(arr, 0, i - 1);
  }
  return arr;
};
var a = [6, 2, 3, 5, 4, 1, 7];
console.log(heapsort(a));




