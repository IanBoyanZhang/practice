// https://github.com/nzakas/computer-science-in-javascript/blob/master/algorithms/sorting/insertion-sort/insertion-sort.js
var insertionsort = function(items) {
  var len = items.length;
  var value, i, j;

  for (i=0; i<len; i+=1) {
    // store the current value because it may shift later
    value = items[i];
    /**
     * whenever the value is in the sorted section is greater than the value
     * in the unsorted section, shift all items in the sorted section over
     * by one, This creates space in which to insert the value
     */
    for (j=i-1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
    }

    items[j+1] = value;
  }
  
  return items;
};

var arr = [6, 3, 5, 4, 2, 7, 1];
console.log(insertionsort(arr));

// insertion sort is stable
var insertionsort = function(items){
  var len = items.length;
  var value, i, j;
  for(i=0; i<len; i+=1) {
    value = items[i];
    // now shifting
    for(j=i-1;j>1 && items[j] > value; j--) {
      items[j+1] = items[j];
    }
    items[j+1] = value;
  } 
  return items;
};
