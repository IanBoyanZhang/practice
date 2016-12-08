// bottom up
// stack shift time complexity is O(n)
var merge = function(left, right) {
  var merged = [], i = 0, j = 0;
  while(i < left.length && j < right.length) {
    merged.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
};

var mergesort = function(array) {
  var len = array.length;
  if (len <= 1) { return array; }

  var stack = [];
  for (var i = 0; i < len; i+=1) {
    stack.push([array[i]]);
  }

  while(stack.length > 1) {
    stack.push(merge(stack.shift(), stack.shift()));
  }
  return stack.pop();
};

var test = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(mergesort(test));
