/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {// 字典是根据key值进行数值获取，不是用下标获取的,此处由于码数数字需要进行前后数字比较，所以保留顺序排序
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

  var count = 0;
  for(i = 0; i < s.length; i++) {
    const item = s[i];
    let val = map[item]; // 注意，字典 本质是一个二维数组，即数组，使用时应该用 map[] 中括号
    if(val < map[s[i+1]]) {
      val = map[s[i+1]] - val;
      i++;
    }
    count += val;
  }
  return count;
};
console.log(romanToInt("MCMXCIV"));