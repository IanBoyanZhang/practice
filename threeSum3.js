/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // Other requirement no duplication
  var result = [];
  if (nums.length < 3) {
    return result;
  }
  var array = nums.sort(function(a, b) {
    return a - b;
  })
  
  var hash = {};
  var len = array.length;

  var isDuplicated = function(arr1, arr2) {
    var counter = 0;
    var set1 = {};
    var set2 = {};
    for ( var i = 0, len1 = arr1.length; i < len1; i++ ) {
      set1[arr1[i]] = set1[arr1[i]] || 0;
      set1[arr1[i]]++;
    }

    for ( var j = 0, len2 = arr2.length; j < len2; j++ ) {
      // find in another set
      set2[arr2[j]] = set2[arr2[j]] || 0;
      set2[arr2[j]]++;
    }

    if (len1 !== len2) {
      return false;
    }
    for ( var key in set1) {
      if (set1[key] !== set2[key]) {
        return false;
      }
    }
    return true;
  };

  var iterCheck = function(candidate, result) {
    for (var iter = 0, resLen = result.length; iter < resLen; iter++) {
      if (isDuplicated(result[iter], candidate)) {
        return false
      }
    }
    return true;
  }

  // return iterCheck(first, arrayResult);
  var j;
  for ( var i = 0; i <= len - 3; i++ ) {
    j = i + 1;
    k = len - 1;
    while ( k > j ) {
      if ((array[i] + array[j] + array[k]) === 0) {
        // loop through past all arrays
        var candidate = [array[i], array[j], array[k]];
        if (iterCheck(candidate, result)) {
          result.push(candidate);
        }
        j+=1;
        k-=1;
        continue;
      }
      array[i] + array[j] + array[k] > 0 ? k-- : j++;
    }
  }
  return result;
};

var arr = [-1, 0, 1, 2, -1, -4];
// var arr = [0, 0, 0, 0];
// var first = [1,2,1]; var second = [1,2,3];
console.log(threeSum(arr));
// console.log(threeSum(arr, [1, 2, 1], [[1, 2, 1], [1,23, 2]]))