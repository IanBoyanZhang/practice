// Pass OJ though addition maybe slow
// https://qiuyuntao.github.io/leetcode/solution/190.html
var reverseBits = function(n) {
  var count = 0;
  var index = 31;
  while(n > 0) {
    count += n%2 && Math.pow(2, index);
//    n = Math.floor(n/2);
    n >>>= 1;
    index--;
  }
  return count;
};
