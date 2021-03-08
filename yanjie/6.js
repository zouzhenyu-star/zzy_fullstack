function duplicateCount(text){
  var str = text.toLowerCase().split('').sort().join('')
  // 请得到所有数字
  var word = '123-4560-666';
  //  /\d+/ 正则 可以用来判断字符串是否符合规则  如果是，则返回true
  console.log(/\d+/.test(word));
  console.log(word.match(/\d+/g)); //  g 继续匹配，不停止
  //相邻的字符是一样的
  // \d 数字  [a-z]  取值范围  用() 括起来
  // ([a-z])\1 相同的字符
  var arr = str.match(/([.])\1+/g)  
  return arr.length
}
console.log(duplicateCount('aaadsdjfwuhh')); 