// 这是 JS 中的类型转换相关的考题
// JS 是弱类型语言，语言类型可转换
// 只有三种 转换成数字
//          转换成布尔值
// 有隐式类型转换
// 显示类型转换
let obj = {name:'obj'} // 引用类型
console.log(obj.toString());// [object Object] || null
console.log(typeof null);
console.log(Object.prototype.toString.call(null));

'1'.toString();// 可执行吗