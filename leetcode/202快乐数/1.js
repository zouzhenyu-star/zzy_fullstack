/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var sum,
  count = 50; // 最多循环50次
  while (count >= 0) {
    var remainder;  // 余数
    sum = 0;
    while (n !== 0) {
      remainder = n % 10;
      sum += remainder * remainder;

      n = parseInt(n / 10);
    }
    if (sum === 1) return true;
    n = sum;
    count--;
  }
  return false;
};