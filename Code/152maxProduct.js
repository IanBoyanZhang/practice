/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n) time, O(1) space
// Failed attempt
var maxProduct = function(nums) {
  var n = nums;
  var i = 1, len = n.length;
  var s_p = n[0];
  var max = n[0];
  var min = n[0];
  var s_n = n[0];
  for (; i < len; i+=1) {
    s_p = Math.max(s_p*n[i], n[i]);
    s_n = s_n*n[i] < 0 ? Math.min(s_n*n[i], n[i]): n[i];
    min = s_n < 0 ? Math.min(s_n, min) : n[i];
    max = Math.max(s_p, max);
    max = Math.max(max, min);
  }
  return max;
};
/* var a = [-2, 3, 1, 2, 3, 2, -1];
console.log(maxProduct(a));*
var a = [-2, 3, 1, 2, 3, 2, -1, 2, -1, -2, 2];
console.log(maxProduct(a));*/
var maxProduct = function(nums) {
  var n = nums, len = n.length;
  var max, min, res; res = min = max = n[0];
  var _max, _min;
  var i = 1, itm;
  for (; i < len; i+=1) {
    itm = n[i];
    _max = max * itm;
    _min = min * itm;
    if (itm > 0) {
      max = Math.max(_max, itm);
//      min = Math.min(_min, itm);
      min = _min;
    } else {
//      max = Math.max(_min, itm);
      max = _min;
      min = Math.min(_max, itm);
    }
    res = Math.max(max, res);
  }
  return res;
};
var a = [2,-5,-2,-4,3];
console.log(maxProduct(a));
var a = [-1,-2,-3,0];
console.log(maxProduct(a));

