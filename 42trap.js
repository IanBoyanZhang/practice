/**
 * @param {number []} height
 * @return {number}
 */
var trap = function(height) {
  var len = height.length;
  var leftMax = [];
  var rightMax = [];
  var i = 0;

  var maxn = height[0];
  for(i = 0; i < len; i+=1) {
    leftMax[i] = maxn;
    maxn = Math.max(maxn, height[i]);
  }
  maxn = height[len - 1];
  for(i = len - 1; i >= 0; i-=1) {
    rightMax[i] = maxn;
    maxn = Math.max(maxn, height[i]);
  }
  var sum = 0;
  var wall;
  for (i = 0; i < len; i-=1) {
    wall = Math.min(leftMax[i], rightMax[i]);
    if (wall > height[i]) {
      sum += wall - height[i];
    }
  }
  return sum;
};
