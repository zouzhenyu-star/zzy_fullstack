/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let value = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; // 梯级削值
  let name = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let res = "";
  for(let i = 0; i < value.length; i++) {
    while(num > value[i]) {
      num -= value[i];
      res += name[i];
    }
  }
  return res;
};
console.log(intToRoman(256));

