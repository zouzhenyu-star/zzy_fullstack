var str = 63;
var str_1 = str.toString(2);
// console.log(str_1);
var reg = RegExp(/1/); //使用RegExp对象的test()方法，用于检索字符串中指定的值。返回 true 或 false
var count = ''
for(var i=0; i<str_1.length; i++){
  if(reg.test(str_1[i]))
  count++
}
console.log(count);

// 1.const定义的变量不可以修改，而且必须初始化
// 2.var定义的变量可以修改，如果不初始化会输出undefined，不会报错
// 3.let是块级作用域，函数内部使用let定义后，对函数外部无影响

//完全正确题解：
var countBits = function(n) {
  // Program Me
  var str_1 = n.toString(2);
  // console.log(str_1);
  var count = ''
  for(var i=0; i<str_1.length; i++){
    if(str_1[i] == 1)
    count++
  }
  return count;

};