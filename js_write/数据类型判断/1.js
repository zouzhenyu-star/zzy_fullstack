function typeOf(obj) { // 调用原型链顶端的 toString 方法进行精准数据类型判断
  // 1. split  在出现空格的时候用 ''进行分割成数组，注意，此时由于是按空格分割，所以左右中括号也被分割，之后得进行去除
  // 2. split(' ')[1] 使 res 会等于分割后数组的 下标为 2 的元素， 即Array
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  // substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。所以此处的 ] 被去掉
  res = res.substring(0, res.length - 1).toLowerCase()// 去除残留的中括号 并进行小写处理
  return res // 得到数组类型
}
console.log(typeOf(true));
console.log(typeOf(null));
console.log(typeOf([]));// 'array'
console.log(typeOf({}));// 'object'    

