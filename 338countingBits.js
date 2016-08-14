/**
 * @param {number} num
 * @return {number []}
 *
 */

var countBits = function(num) {
  var sign_bit = num >= 0 ? 0 : 1;
  num = num >= 0 ? num : -num;
  var hash = [];
  if (num === 0) {
    hash.push(0 + sign_bit);
    return hash;
  }
  if (num === 1) {
    hash.push(0 + sign_bit);
    hash.push(1 + sign_bit);
    return hash;
  }
  if (num === 2) {
    hash.push(0 + sign_bit);
    hash.push(1 + sign_bit);
    hash.push(1 + sign_bit);
    return hash;
  }
  hash = [0 + sign_bit, 1 + sign_bit, 1 + sign_bit, 2 + sign_bit];
  var iter = 2;
  var last_iter = 3;
  while(iter <= num) {
    if (last_iter >= num) {
      last_iter = num;
    }
    for (; iter <= num; iter += 1) {
      if (iter*2 <= num) hash[iter*2] = hash[iter];
      if (iter*2 + 1 <= num) hash[iter*2 + 1] = hash[iter] + 1;
    }
    iter = iter + 1;
    last_iter = iter*2+1;
  }
  return hash;
};

console.log(countingBits(2));

console.log(countingBits(5));
console.log(countingBits(10));
console.log(countingBits(-10));
console.log(countingBits(-1));
console.log(countingBits(1));

