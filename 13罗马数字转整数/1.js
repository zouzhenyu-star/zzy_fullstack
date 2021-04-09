/**
 * @param {string} s
 * @return {number}
 */
 /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { // 定义字典，不使用双数组，双数组太麻烦
  const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  let sum = 0;
  for(i = 0; i < s.length; i++) {
      const item = s[i]; // 按for循环下标获取 罗马数字
      let val = map[item]; // 根据罗马数字 放到map字典中找到对应 数值
      if(val < map[s[i+1]]) { // 将罗马数字前后比较，由于通常前面的罗马数字 会比后面的罗马数字大，所以出现前面罗马数字更小时，需要进行减值操作
          // 前面小于后面 后面 - 前面
          val = map[s[i+1]] - val; // 获取特殊情况下的val值
          i++;  // 特殊情况的罗马数字通常是由两个罗马数字组成，所以这里要让 i 多迭代一次，连跳两个数字
      }
      sum += val;
  }
  return sum
};
