/**
 * @param {number} n
 * @return {number[]}
 *
 */
var grayCode = function(n) {
  var res = [];
  var si = 0, Li;
  var end = Math.pow(2, n);
  var i, j;
  for (i = 0; i < end; i+=1) {
    res.push(0);
  }

  for(i = n - 1; i >= 0; i-=1) {
    var d = 0;
    si = Math.pow(2, i);
    Li = si * 2;
    for (j = 0; j < end; j+=1) {
      if (j < si) { d = 0; }
      else {
        // Why this doesn't work?
        // d = Number(!Math.floor((j - si)/Li)%2); 
        d = Number(!Number(Math.floor((j-si)/Li)%2));
      }
      d = d << i;
      res[j] += d;
    }
  }
  return res;
};

// How to optimize?
var grayCode = function(n) {
  var res = [], si = 0, Li, end = Math.pow(2, n);
  var i, j, d;
  for (j = 0; j < end; j+=1) {
    res.push(0);
  }
  for (i = 0; i < n; i+=1) {
    d = 0; si = Math.pow(2, i);
    Li = si*2;
    for (j = 0; j < end; j+=1) {
      if (j < si) { continue; }
       d = Number(!Number(Math.floor((j-si)/Li)%2));
      // confusing use  of '!'
//      d = +(!+(Math.floor((j-si)/Li)%2));
//      if (!d) { continue; }
      res[j] += d << i;
    }
  }
  return res;
};


// After switching i and j, seems slower than previous version?
// How to optimize?
var grayCode = function(n) {
  var res = [], si = 0, end = Math.pow(2, n);
  var i, j, d;
  for (j = 0; j < end; j+=1) {
    res.push(0);
    for (i = 0; i < n; i+=1) {
      d = 0; si = Math.pow(2, i);
      Li = si * 2;
      if (j < si) { break; }
      d = Number(!Number(Math.floor((j-si)/Li)%2));
      res[j] += d << i;
    }
  }
  return res;
};

var rtn = grayCode(3);
console.log(rtn);
